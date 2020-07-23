import { updateHistoryStorage } from "../../helpers";
import {
    authFailure,
    authToggleStatus,
    isAuthing,
    logoutAction,
} from "./authActions";
import { requestSuccess, requestFailure, isRequesting } from "./consoleActions";
import {
    toggleCopyText,
    toggleHistoryMenu,
    addHistoryItem,
    updateHistory,
} from "./historyActions";
import {} from "./screenToggleActions";
import sendsay from "../api";

// AUTH
export const auth = (login, sublogin, password) => (dispatch) => {
    sublogin = sublogin.length ? sublogin : "";
    dispatch(isAuthing(true));

    const authUser = sendsay.request({
        action: "login",
        login: login,
        sublogin: sublogin,
        passwd: password,
    });

    authUser
        .then((res) => {
            sendsay.setSession(res.session);
            dispatch(authFailure(false, null));
            dispatch(authToggleStatus(true, login, sublogin));
            dispatch(isAuthing(false));

            localStorage.setItem(
                "user",
                JSON.stringify({
                    login: login,
                    sublogin: sublogin,
                    sendsay_session: res.session,
                })
            );
        })
        .catch((err) => {
            dispatch(authFailure(true, err));
            dispatch(isAuthing(false));
            localStorage.removeItem("user");
        });
};

export const checkAuth = (login, sublogin, sendsay_session) => (dispatch) => {
    sendsay.setSession(sendsay_session);
    sendsay
        .request({ action: "pong" })
        .then(() => {
            dispatch(authFailure(false, null));
            dispatch(authToggleStatus(true, login, sublogin));
        })
        .catch((err) => {
            dispatch(authFailure(true, err));
            localStorage.removeItem("user");
        });
};

export const logout = () => (dispatch) => {
    sendsay.request({ action: "logout" });
    dispatch(logoutAction());
    delete localStorage.user;
};

// CONSOLE
export const consoleRequest = (requestObj) => (dispatch) => {
    dispatch(isRequesting(true));

    requestObj = JSON.parse(requestObj);
    const name = requestObj[Object.keys(requestObj)[0]];
    const query = JSON.stringify(requestObj);

    sendsay
        .request(requestObj)
        .then((res) => {
            dispatch(requestSuccess(requestObj, res));
            dispatch(isRequesting(false));
            dispatch(historyAddItem(true, name, query));
        })
        .catch((err) => {
            dispatch(requestFailure(requestObj, err));
            dispatch(isRequesting(false));
            dispatch(historyAddItem(false, name, query));
        });
};

// HISTORY
export const toggleCopyTimeout = (id) => (dispatch) => {
    dispatch(toggleHistoryMenu(id, false));
    dispatch(toggleCopyText(id, true));
    setTimeout(() => {
        dispatch(toggleCopyText(id, false));
    }, 1000);
};

export const historyMenuRun = (id, query) => (dispatch) => {
    dispatch(consoleRequest(query, id));
    dispatch(toggleHistoryMenu(id, false));
    dispatch(updateHistoryFields(id));
};

export const historyAddItem = (status, name, query) => (dispatch, getState) => {
    const items = getState().items.items;

    let maxIdArr = Math.max.apply(
        Math,
        items.map((i) => {
            return i.id;
        })
    );
    const isExist = items.some((i) => {
        return i.name === name;
    });

    !isExist && dispatch(addHistoryItem(++maxIdArr, status, name, query));
    updateHistoryStorage(items);
};

const updateHistoryFields = (id) => (dispatch, getState) => {
    let items = getState().items.items;
    const curItem = items.find((i) => {
        return i.id === id;
    });
    const curItemIdx = items.indexOf(curItem);
    items.splice(curItemIdx, 1);

    dispatch(updateHistory([curItem, ...items]));
    updateHistoryStorage([curItem, ...items]);
};

export * from "./authActions";
export * from "./consoleActions";
export * from "./historyActions";
