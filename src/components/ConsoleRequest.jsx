import React, { useState } from "react";
import AceEditor from "react-ace";

function ConsoleRequest() {
    const [isValid, setIsValid] = useState(true);
    const [value, setValue] = useState("");

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

export default ConsoleRequest;
