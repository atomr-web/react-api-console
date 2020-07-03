import React from "react";

function LoginForm({ submitForm, isAuthing, handleChange }) {
    return (
        <form className="login-form" onSubmit={submitForm}>
            <div className="row invalid">
                <label htmlFor="login">
                    <span>Логин</span>
                </label>
                <input
                    id="login"
                    type="text"
                    name="login"
                    placeholder=""
                    onChange={handleChange}
                />
            </div>
            <div className="row">
                <label htmlFor="sublogin">
                    <span>Сублогин</span>
                    <span>Опционально</span>
                </label>
                <input
                    id="sublogin"
                    type="text"
                    name="sublogin"
                    placeholder=""
                    onChange={handleChange}
                />
            </div>
            <div className="row">
                <label htmlFor="password">
                    <span>Пароль</span>
                </label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder=""
                    onChange={handleChange}
                />
            </div>
            <button
                type="submit"
                disabled={isAuthing}
                className={isAuthing ? "submitting" : ""}
            >
                <i className="spinner"></i>Войти
            </button>
        </form>
    );
}

export default LoginForm;
