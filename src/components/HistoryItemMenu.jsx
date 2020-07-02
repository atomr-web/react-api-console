import React from "react";

function HistoryItemMenu({ menuHistoryRUN }) {
    return (
        <>
            <div className="history-item__menu show">
                <button onClick={menuHistoryRUN}>Выполнить</button>
                <button>Скопировать</button>
                <button className="remove">Удалить</button>
            </div>
        </>
    );
}

export default HistoryItemMenu;
