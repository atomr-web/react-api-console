import React from "react";
import AceEditor from "react-ace";

function ConsoleRequest({ submitRequest, ohChange, isValid, value }) {
    return (
        <div className={`console__item ${isValid ? "" : "console_error"}`}>
            <div className="console__title">
                <span>Запрос:</span>
            </div>
            <div className="console-container">
                <form
                    action="#"
                    method="#"
                    id="request-form"
                    onSubmit={submitRequest}
                >
                    <AceEditor
                        placeholder="Enter the JSON"
                        onChange={ohChange}
                        value={value}
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
                            useWorker: false,
                        }}
                    />
                </form>
            </div>
        </div>
    );
}

export default ConsoleRequest;
