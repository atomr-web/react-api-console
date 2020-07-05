import React, { useState } from "react";
import AceEditor from "react-ace";
import { connect } from "react-redux";
import { request } from "../redux/actions/consoleAction";

function ConsoleRequest({ request, state }) {
    const [isValid, setIsValid] = useState(true);
    const [value, setValue] = useState("");

    console.log(state);

    const ohChange = (val) => {
        let newVal = "";
        try {
            newVal = JSON.parse(val);
            setIsValid(true);
            setValue(newVal);
        } catch (e) {
            setIsValid(false);
            setValue("");
            return false;
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className={`console__item ${isValid ? "" : "console_error"}`}>
            <div className="console__title">
                <span>Запрос:</span>
            </div>
            <form action="#" method="#" id="request-form" onSubmit={onSubmit}>
                <AceEditor
                    placeholder="Enter the JSON"
                    onChange={ohChange}
                    mode="json"
                    theme="github"
                    fontSize={14}
                    showGutter={false}
                    highlightActiveLine={false}
                    name="request"
                    editorProps={{
                        $blockScrolling: true,
                    }}
                    width="100%"
                    setOptions={{
                        showLineNumbers: true,
                        tabSize: 2,
                    }}
                />
            </form>
        </div>
    );
}

const mapSTateToProps = (state) => {
    return {
        state: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        request: (isStatus, text) => dispatch(request(isStatus, text)),
    };
};

export default connect(mapSTateToProps, mapDispatchToProps)(ConsoleRequest);
