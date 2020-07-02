import React from "react";

function LoginFormError() {
    return (
        <div className="form-error">
            <img src="img/form-submit-error.svg" alt="" />
            <div className="form-error__text">
                <span className="title">Вход не вышел</span>
                <span className="response">
                    {`{id: "error/auth/failed",
                        explain: "wrong_ credentials",}`}
                </span>
            </div>
        </div>
    );
}

export default LoginFormError;
