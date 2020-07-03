import React from "react";

function LoginFormError(authErrorText) {
    const error = authErrorText.authErrorText;
    delete error["request"];
    const errText = JSON.stringify(error);

    return (
        <div className="form-error">
            <img src="img/form-submit-error.svg" alt="" />
            <div className="form-error__text">
                <span className="title">Вход не вышел</span>
                <span className="response">{errText}</span>
            </div>
        </div>
    );
}

export default LoginFormError;
