import React from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import "./assets/css/style.css";
import "./App.css";
import { connect } from "react-redux";

function App({ isAuth }) {
    console.log(isAuth);

    return <div className="App">{isAuth ? <HomePage /> : <LoginPage />}</div>;
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.authStatus,
    };
};

export default connect(mapStateToProps, null)(App);
