import React from "react";
import { connect } from "react-redux";
import Fullscreen from "react-full-screen";
import HeaderConsole from "../components/HeaderConsole";
import AppConsoles from "../components/AppConsoles";
import AppBottom from "../components/AppBottom";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

function HomePage({ isFullScreen, menuHistoryRUN }) {
    return (
        <div>
            <Fullscreen enabled={isFullScreen}>
                <div className="app-container">
                    <HeaderConsole />
                    <main>
                        <section className="console-container">
                            <AppConsoles />
                            <AppBottom />
                        </section>
                    </main>
                </div>
            </Fullscreen>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isFullScreen: state.fullScreen.isFullScreen,
    };
};

export default connect(mapStateToProps, null)(HomePage);
