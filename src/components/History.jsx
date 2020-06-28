import React from "react";
import IconHistoryClear from "./icons/IconHistoryClear";
import HistoryItem from "./HistoryItem";

const HISTORY = [
    {
        id: 1,
        status: false,
        name: "pong",
        query: `{
            action: "pong",
        }`,
    },
    {
        id: 2,
        status: true,
        name: "sys.settings.get",
        query: `{
            action: "sys.settings.get",
        }`,
    },
];

function History(e) {
    return (
        <div className="header__row header__row_bottom">
            <div className="header__history">
                <div className="header__history-items">
                    {HISTORY.map((item, i) => {
                        return (
                            <HistoryItem
                                key={item.id}
                                status={item.status}
                                name={item.name}
                                query={item.query}
                            />
                        );
                    })}
                </div>
                <IconHistoryClear />
            </div>
        </div>
    );
}

export default History;
