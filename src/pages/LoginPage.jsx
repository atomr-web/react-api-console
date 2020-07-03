import React, { useState } from "react";
import { connect } from "react-redux";
import { auth } from "../redux/actions";
import LoginFormError from "../components/LoginFormError";
import LoginForm from "../components/LoginForm";
import Sendsay from "sendsay-api";

function LoginPage({ authReducer, state }) {
    const sendsay = new Sendsay();
    // sendsay
    //     .request({ action: "pong", list: ["about.id"] })
    //     .then(function (res) {
    //         console.log(res);
    //     });

    const submitForm = (e) => {
        console.log(state);

        e.preventDefault();
        sendsay
            .login({
                login: "wildkayote@yandex.ru",
                sublogin: "",
                password: "JaiPrabhupad108",
            })
            .then(
                () => {
                    authReducer("wildkayote@yandex.ru", "", "JaiPrabhupad108");
                },
                (reason) => {
                    console.log("error: ", reason);
                }
            );
        console.log(state);
    };

    return (
        <>
            <main>
                <div className="login-page">
                    <div className="login-page__container">
                        <img className="logo" src="img/logo.svg" alt="" />
                        <div className="login-page__form-container">
                            <h1>API-консолька</h1>
                            <LoginFormError />
                            <LoginForm submitForm={submitForm} />
                        </div>
                        <a
                            href="https://github.com/atomr-web/react-api-console"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @react-api-console
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        state: state.auth.state.authData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        authReducer: (login, sublogin, password) =>
            dispatch(auth(login, sublogin, password)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
