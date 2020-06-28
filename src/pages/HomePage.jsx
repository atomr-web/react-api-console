import React, { useState } from "react";
import HeaderConsole from "../components/HeaderConsole";
import AppBottom from "../components/AppBottom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";
import Fullscreen from "react-full-screen";

function HomePage() {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const onChange = (newValue) => {
        // console.log("change: ", newValue);
    };

    const changeScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    return (
        <div>
            <Fullscreen
                enabled={isFullScreen}
                onChange={(isFullScreen) => setIsFullScreen(isFullScreen)}
            >
                <div className="app-container">
                    <HeaderConsole
                        changeScreen={changeScreen}
                        isFullScreen={isFullScreen}
                    />
                    <main>
                        <section className="console-container">
                            <div className="console">
                                <div className="console__item">
                                    <div className="console__title">
                                        <span>Запрос:</span>
                                    </div>
                                    <form
                                        action="#"
                                        method="#"
                                        id="request-form"
                                    >
                                        <AceEditor
                                            mode="json"
                                            theme="github"
                                            fontSize={14}
                                            showGutter={false}
                                            highlightActiveLine={false}
                                            onChange={onChange}
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
                                        onChange={onChange}
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
                            <AppBottom />
                        </section>
                    </main>
                </div>
            </Fullscreen>
        </div>
    );
}

export default HomePage;
