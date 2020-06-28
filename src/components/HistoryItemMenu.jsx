import React from "react";

function HistoryItemMenu({ isOpenMenu, copyClipboared }) {
    return (
        <>
            <div className={`history-item__menu  ${isOpenMenu ? "show" : ""} `}>
                <button>Выполнить</button>
                <button onClick={copyClipboared}>Скопировать</button>
                <button className="remove">Удалить</button>
            </div>
        </>
    );
}

export default HistoryItemMenu;
