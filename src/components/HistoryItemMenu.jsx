import React from "react";

function HistoryItemMenu({ historyRUN }) {
    return (
        <>
            <div className="history-item__menu show">
                <button onClick={historyRUN}>Выполнить</button>
                <button>Скопировать</button>
                <button className="remove">Удалить</button>
            </div>
        </>
    );
}

export default HistoryItemMenu;
