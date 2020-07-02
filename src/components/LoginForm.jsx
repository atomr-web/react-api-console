import React from "react";

function LoginForm() {
    return (
        <form className="login-form" action="#">
            <div className="row invalid">
                <label htmlFor="login">
                    <span>Логин</span>
                </label>
                <input id="login" type="text" placeholder="" />
            </div>
            <div className="row">
                <label htmlFor="sublogin">
                    <span>Сублогин</span>
                    <span>Опционально</span>
                </label>
                <input id="sublogin" type="text" placeholder="" />
            </div>
            <div className="row">
                <label htmlFor="password">
                    <span>Пароль</span>
                </label>
                <input id="password" type="password" placeholder="" />
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
