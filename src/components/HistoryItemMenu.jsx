import React from "react";

function HistoryItemMenu({ isOpenMenu, menuRef }) {
    return (
        <>
            {/* style={{ opacity: 0, visibility: "hidden" }} */}

            <div
                className={`history-item__menu (
                                    ${isOpenMenu === true ? "show" : ""}
                                )`}
            >
                <button>Выполнить</button>
                <button>Скопировать</button>
                <button className="remove">Удалить</button>
            </div>
        </>
    );
}

export default HistoryItemMenu;
