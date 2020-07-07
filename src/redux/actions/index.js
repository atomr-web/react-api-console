import {
    authFailure,
    authToggleStatus,
    isAuthing,
    logoutAction,
} from "./authActions";
import { requestSuccess, requestFailure } from "./consoleActions";
import {} from "./historyActions";
import {} from "./screenToggleActions";
import sendsay from "../api";

// AUTH
export const auth = (login, sublogin, password, sendsay_session) => (
    dispatch
) => {
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
            dispatch(authFailure(false, null));
            dispatch(authToggleStatus(true, login, sublogin, sendsay_session));
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
            console.log(err);

            dispatch(authFailure(true, err));
            dispatch(isAuthing(false));
            localStorage.removeItem("user");
        });
};

export const logout = () => (dispatch) => {
    dispatch(logoutAction());
    delete localStorage.user;
};

// CONSOLE
export const consoleRequest = (requestObj) => (dispatch) => {
    let session = localStorage.getItem("user");
    session = session !== null && JSON.parse(session).sendsay_session;

    sendsay
        .request({ ...requestObj, session: session })
        .then((res) => dispatch(requestSuccess(requestObj, res)))
        .catch((err) => dispatch(requestFailure(requestObj, err)));
};

export * from "./authActions";
