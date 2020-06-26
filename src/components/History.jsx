import React, { useState } from "react";
import IconHistoryStatusTrue from "./icons/IconHistoryStatusTrue";
import IconHistoryStatusFalse from "./icons/IconHistoryStatusFalse";
import IconHistoryToggle from "./icons/IconHistoryToggle";
import IconHistoryClear from "./icons/IconHistoryClear";
import HistoryItemMenu from "./HistoryItemMenu";

const HISTORY = [
    {
        id: 1,
        status: false,
        name: "pong",
        value: `{
            "action":"pong"
        }`,
    },
    {
        id: 2,
        status: true,
        name: "sys.settings.get",
        value: `{
            "action": "sys.settings.get"
        }`,
    },
];

function History() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const showMenu = (e) => {
        setIsOpenMenu(!isOpenMenu);

        console.log(e.getBoundingClientRect());
    };

    return (
        <div>
            <div className="header__row header__row_bottom">
                <div className="header__history">
                    <div className="header__history-items">
                        {HISTORY.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className="header-history__item"
                                >
                                    <span className="history-item__status">
                                        {item.status === true ? (
                                            <IconHistoryStatusTrue />
                                        ) : (
                                            <IconHistoryStatusFalse />
                                        )}
                                    </span>
                                    <span className="history-item__title">
                                        {item.name}
                                    </span>
                                    <IconHistoryToggle showMenu={showMenu} />
                                </div>
                            );
                        })}
                    </div>
                    <HistoryItemMenu isOpenMenu={isOpenMenu} />
                    <IconHistoryClear />
                </div>
            </div>
        </div>
    );
}

export default History;
