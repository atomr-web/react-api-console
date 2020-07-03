import React from "react";

function LoginForm({ submitForm }) {
    return (
        <form className="login-form" onSubmit={submitForm}>
            <div className="row invalid">
                <label htmlFor="login">
                    <span>Логин</span>
                </label>
                <input id="login" type="text" name="login" placeholder="" />
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
                />
            </div>
            <button type="submit">
                <i className="spinner"></i>Войти
            </button>
            <button type="submit" disabled className="submitting">
                <i className="spinner"></i>Войти
            </button>
        </form>
    );
}

export default LoginForm;
