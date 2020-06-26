import React from "react";

function LoginPage() {
    return (
        <div>
            <main>
                <div className="login-page">
                    <div className="login-page__container">
                        <img className="logo" src="img/logo.svg" alt="" />
                        <div className="login-page__form-container">
                            <h1>API-консолька</h1>
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
                            <form className="login-form" action="#">
                                <div className="row invalid">
                                    <label htmlFor="login">
                                        <span>Логин</span>
                                    </label>
                                    <input
                                        id="login"
                                        type="text"
                                        placeholder=""
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
                                        placeholder=""
                                    />
                                </div>
                                <button type="submit">
                                    <i className="spinner"></i>Войти
                                </button>
                                <button
                                    type="submit"
                                    disabled
                                    className="submitting"
                                >
                                    <i className="spinner"></i>Войти
                                </button>
                            </form>
                        </div>
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @link-github
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default LoginPage;
