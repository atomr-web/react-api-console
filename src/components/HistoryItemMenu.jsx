import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function HistoryItemMenu({
    historyMenuRun,
    removeHistoryItem,
    toggleCopyTimeout,
    id,
    query,
}) {
    return (
        <>
            <div className="history-item__menu show">
                <button onClick={() => historyMenuRun(id, query)}>
                    Выполнить
                </button>
                <CopyToClipboard
                    text={query}
                    onCopy={() => toggleCopyTimeout(id)}
                >
                    <button>Скопировать</button>
                </CopyToClipboard>
                <button
                    className="remove"
                    onClick={() => removeHistoryItem(id)}
                >
                    Удалить
                </button>
            </div>
        </>
    );
}

export default HistoryItemMenu;
