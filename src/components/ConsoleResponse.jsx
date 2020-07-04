import React from "react";
import AceEditor from "react-ace";

function ConsoleResponse() {
    return (
        <div className="console__item">
            <div className="console__title">
                <span>Ответ:</span>
            </div>
            <AceEditor
                mode="json"
                theme="github"
                fontSize={14}
                showGutter={false}
                highlightActiveLine={false}
                name="response"
                editorProps={{ $blockScrolling: true }}
                width="100%"
                readOnly={true}
            />
        </div>
    );
}

export default ConsoleResponse;
