import React from "react";
import LoginFormError from "../components/LoginFormError";
import LoginForm from "../components/LoginForm";

function LoginPage() {
    return (
        <>
            <main>
                <div className="login-page">
                    <div className="login-page__container">
                        <img className="logo" src="img/logo.svg" alt="" />
                        <div className="login-page__form-container">
                            <h1>API-консолька</h1>
                            <LoginFormError />
                            <LoginForm />
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
