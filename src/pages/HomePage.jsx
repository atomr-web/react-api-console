import React, { useState, useEffect } from "react";
import { consoleRequest } from "../redux/actions";
import { connect } from "react-redux";
import Fullscreen from "react-full-screen";
import HeaderConsole from "../components/HeaderConsole";
import AppConsoles from "../components/AppConsoles";
import AppBottom from "../components/AppBottom";
// import DeadSession from "../components/DeadSession";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

function HomePage({
    isFullScreen,
    consoleRequest,
    response,
    isSuccess,
    isRequesting,
    request,
}) {
    const [isValid, setIsValid] = useState(true);
    const [value, setValue] = useState("");

    useEffect(() => {
        if (typeof request === "object") {
            const reqConvertStr = JSON.stringify(request, null, " \t");
            ohChange(reqConvertStr);
        }
    }, [request]);

    const ohChange = (val) => {
        setValue(val);
        try {
            JSON.parse(val);
            setIsValid(true);
        } catch (e) {
            setIsValid(false);
        }
    };

    const submitRequest = (e) => {
        e.preventDefault();
        consoleRequest(value);
    };

    const formatRequest = (e) => {
        e.preventDefault();
        const valConverObj = JSON.parse(value);
        const newValue = JSON.stringify(valConverObj, null, " \t");

        setValue(newValue);
    };

    return (
        <div>
            <Fullscreen enabled={isFullScreen}>
                <div className="app-container">
                    <HeaderConsole />
                    <main>
                        <AppConsoles
                            value={value}
                            submitRequest={submitRequest}
                            ohChange={ohChange}
                            isValid={isValid}
                            response={response}
                            isSuccess={isSuccess}
                            isRequesting={isRequesting}
                        />
                        <AppBottom
                            isValid={isValid}
                            formatRequest={formatRequest}
                            isRequesting={isRequesting}
                        />
                    </main>
                </div>
                {/* <DeadSession /> */}
            </Fullscreen>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isFullScreen: state.fullScreen.isFullScreen,
        response: state.console.response,
        isSuccess: state.console.isSuccess,
        isRequesting: state.console.isRequesting,
        request: state.console.request,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        consoleRequest: (value) => dispatch(consoleRequest(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
