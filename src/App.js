import React from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import "./assets/css/style.css";
import "./App.css";
import { connect } from "react-redux";

function App({ isAuth, state }) {
    // return <div className="App">{isAuth ? <HomePage /> : <LoginPage />}</div>;
    return (
        <div className="App">
            <HomePage />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.authStatus,
    };
};

export default connect(mapStateToProps, null)(App);
