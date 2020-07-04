import React from "react";
import { connect } from "react-redux";
import { toggleFullScreen, logout } from "../redux/actions";
import logo from "../assets/img/logo.svg";
import IconLogout from "./icons/IconLogout";
import IconFullScreenTrue from "./icons/IconFullScreenTrue";
import IconFullScreenFalse from "./icons/IconFullScreenFalse";
import History from "./History";

function HeaderConsole({ toggleFullScreen, isFullScreen, logout }) {
    return (
        <div>
            <header>
                <div className="header__row header__row_top">
                    <div className="row__item">
                        <img src={logo} alt="" />
                        <h1 className="header__title">API-консолька</h1>
                    </div>
                    <div className="row__item">
                        <div className="header__login">
                            <span className="login">some@eamil.com</span>
                            <span className="sublogin">sublogin</span>
                        </div>
                        <button
                            className="header__logout"
                            onClick={() => logout()}
                        >
                            Выйти
                            <IconLogout />
                        </button>
                        <button
                            className="header__change-screen"
                            onClick={() => toggleFullScreen()}
                        >
                            {isFullScreen ? (
                                <IconFullScreenTrue />
                            ) : (
                                <IconFullScreenFalse />
                            )}
                        </button>
                    </div>
                </div>
                <History />
            </header>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isFullScreen: state.isFullScreen,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFullScreen: () => dispatch(toggleFullScreen()),
        logout: () => dispatch(logout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderConsole);
