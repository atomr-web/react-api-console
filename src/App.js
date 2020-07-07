import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { auth, isAuthing, authToggleStatus } from "./redux/actions";
import "./assets/css/style.css";
import "./App.css";
import { connect } from "react-redux";

function App({ isAuth, auth, isAuthing, authErrorText, authToggleStatus }) {
    useEffect(() => {
        if (localStorage.getItem("user") !== null) {
            let user = localStorage.getItem("user");
            user = JSON.parse(user);

            const login = user.login;
            const sublogin = user.sublogin;
            const sendsay_session = user.sendsay_session;

            authToggleStatus(true, login, sublogin, sendsay_session);
        }
    }, []);

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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
