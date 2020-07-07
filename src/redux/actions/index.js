import { authFailure, authToggleStatus, isAuthing } from "./authActions";
import { requestSuccess, requestFailure } from "./consoleActions";
import {} from "./historyActions";
import {} from "./screenToggleActions";
import sendsay from "../api";

// AUTH
export const auth = (login, sublogin, password) => (dispatch) => {
    sublogin = sublogin.length ? sublogin : "";
    dispatch(isAuthing(true));

    const authUser = sendsay.login({
        login: login,
        sublogin: sublogin,
        password: password,
    });

    // const reqPong = authUser.then((res) => {
    //     sendsay.request({ action: "pong" });
    // });

    authUser
        .then(() => {
            dispatch(authFailure(false, ""));
            dispatch(authToggleStatus(true, login, sublogin));
            localStorage.setItem("login", login);
            sublogin.length > 0 && localStorage.setItem("sublogin", sublogin);
            dispatch(isAuthing(false));
        })
        .catch((err) => {
            dispatch(authFailure(true, err));
            localStorage.removeItem("login");
            localStorage.removeItem("sublogin");
            dispatch(isAuthing(false));
        });
};

// CONSOLE
export const consoleRequest = (requestObj) => (dispatch) => {
    sendsay
        .request(requestObj)
        .then((res) => dispatch(requestSuccess(requestObj, res)))
        .catch((err) => dispatch(requestFailure(requestObj, err)));
};

export * from "./authActions";
