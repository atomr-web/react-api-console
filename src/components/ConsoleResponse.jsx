import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-github";

function ConsoleResponse({ response, isSuccess }) {
    return (
        <div className={`console__item ${isSuccess ? "" : "console_error"}`}>
            <div className="console__title">
                <span>Ответ:</span>
            </div>
            <div className="console-container">
                <AceEditor
                    mode="json"
                    theme="github"
                    value={response}
                    fontSize={14}
                    showGutter={false}
                    highlightActiveLine={false}
                    name="response"
                    editorProps={{ $blockScrolling: true }}
                    autoScrollEditorIntoView={true}
                    width="100%"
                    readOnly={true}
                    setOptions={{
                        useWorker: false,
                    }}
                />
            </div>
        </div>
    );
}

export default ConsoleResponse;
