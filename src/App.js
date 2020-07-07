import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { auth, isAuthing, authToggleStatus } from "./redux/actions";
import "./assets/css/style.css";
import "./App.css";
import { connect } from "react-redux";

function App({
    isAuth,
    auth,
    isAuthing,
    authErrorText,
    state,
    authToggleStatus,
}) {
    console.log(state);

    useEffect(() => {
        let login = localStorage.getItem("login");
        let sublogin = localStorage.getItem("sublogin");

        login !== null
            ? authToggleStatus(true, login, sublogin)
            : authToggleStatus(false, null, null);
    }, [authToggleStatus]);

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
        authToggleStatus: (authStatus, login, sublogin) =>
            dispatch(authToggleStatus(authStatus, login, sublogin)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
