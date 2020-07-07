import React, { useState } from "react";
import LoginFormError from "../components/LoginFormError";
import LoginForm from "../components/LoginForm";

function LoginPage({ auth, isAuthing, authErrorText }) {
    const [stateInputs, setStateInputs] = useState({
        login: "",
        sublogin: "",
        password: "",
    });

    const handleChange = (e) => {
        const val = e.target.value;
        setStateInputs({
            ...stateInputs,
            [e.target.name]: val,
        });
    };

    const submitForm = (e) => {
        e.preventDefault();

        const { login, sublogin, password } = stateInputs;
        auth(login, sublogin.length > 0 ? sublogin : "", password);
    };

    return (
        <>
            <main>
                <div className="login-page">
                    <div className="login-page__container">
                        <img className="logo" src="img/logo.svg" alt="" />
                        <div className="login-page__form-container">
                            <h1>API-консолька</h1>
                            {authErrorText !== null ? (
                                <LoginFormError authErrorText={authErrorText} />
                            ) : null}
                            <LoginForm
                                submitForm={submitForm}
                                isAuthing={isAuthing}
                                handleChange={handleChange}
                            />
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

export default LoginPage;
