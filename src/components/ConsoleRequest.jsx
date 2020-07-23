import React from "react";
import AceEditor from "react-ace";

function ConsoleRequest({
    submitRequest,
    ohChange,
    isValid,
    value,
    requestField,
}) {
    return (
        <div
            className={`console__item console__item_request ${
                isValid ? "" : "console_error"
            }`}
            ref={requestField}
        >
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
                        width="100%"
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
