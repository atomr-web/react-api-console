import React from "react";
import HeaderConsole from "../components/HeaderConsole";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

function HomePage() {
    const onChange = (newValue) => {
        console.log("change: ", newValue);
    };

    return (
        <div>
            <div className="app-container">
                <HeaderConsole />
                <main>
                    <section className="console-container">
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
                                        onChange={onChange}
                                        name="request"
                                        editorProps={{ $blockScrolling: true }}
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
                        <div className="console__bottom">
                            <button type="submit" form="request-form">
                                Отправить
                            </button>
                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @link-github{" "}
                            </a>
                            <button className="btn-transparent">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g opacity="0.8">
                                        <path
                                            d="M21 10H7"
                                            stroke="#0D0D0D"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M11 6H3"
                                            stroke="#0D0D0D"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12 14H7"
                                            stroke="#0D0D0D"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7 18H3"
                                            stroke="#0D0D0D"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                </svg>
                                Форматировать
                            </button>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default HomePage;
