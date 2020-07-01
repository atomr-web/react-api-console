import React from "react";
import AceEditor from "react-ace";

function AppConsoles() {
    return (
        <div className="console">
            <div className="console__item">
                <div className="console__title">
                    <span>Запрос:</span>
                </div>
                <form action="#" method="#" id="request-form">
                    <AceEditor
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
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                            showLineNumbers: true,
                            tabSize: 2,
                        }}
                    />
                </form>
            </div>
            <div className="console__item console_error">
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
                    setOptions={{
                        enableBasicAutocompletion: false,
                        enableLiveAutocompletion: false,
                        enableSnippets: true,
                        tabSize: 2,
                    }}
                />
            </div>
        </div>
    );
}

export default AppConsoles;
