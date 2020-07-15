import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { auth, authToggleStatus, checkAuth } from "./redux/actions";
import { connect } from "react-redux";
import "./assets/css/style.css";
import "./App.css";

function App({ isAuth, auth, isAuthing, authErrorText, checkAuth }) {
    useEffect(() => {
        if (localStorage.getItem("user") !== null) {
            let user = localStorage.getItem("user");
            user = JSON.parse(user);

            const login = user.login;
            const sublogin = user.sublogin;
            const sendsay_session = user.sendsay_session;

            checkAuth(login, sublogin, sendsay_session);
        }
    }, [checkAuth]);

    return (
        <div className="App">
            {isAuth ? (
                <HomePage />
            ) : (
                <LoginPage
                    auth={auth}
                    isAuthing={isAuthing}
                    authErrorText={authErrorText}
                />
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.authStatus,
        isAuthing: state.auth.isAuthing,
        authErrorText: state.auth.authErrorText,
        state: state.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        auth: (login, sublogin, password) =>
            dispatch(auth(login, sublogin, password)),
        authToggleStatus: (authStatus, login, sublogin, sendsay_session) =>
            dispatch(
                authToggleStatus(authStatus, login, sublogin, sendsay_session)
            ),
        checkAuth: (login, sublogin, sendsay_session) =>
            dispatch(checkAuth(login, sublogin, sendsay_session)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
