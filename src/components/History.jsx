import React from "react";
import IconHistoryClear from "./icons/IconHistoryClear";
import HistoryItem from "./HistoryItem";

function History({ items }) {
    return (
        <div className="header__row header__row_bottom">
            <div className="header__history">
                <div className="header__history-items">
                    {items.length
                        ? items.map((item, i) => {
                              return (
                                  <HistoryItem
                                      key={item.id}
                                      id={item.id}
                                      status={item.status}
                                      name={item.name}
                                      isCopied={item.isCopied}
                                      isShowMenu={item.isShowMenu}
                                      query={item.query}
                                  />
                              );
                          })
                        : null}
                </div>
                <IconHistoryClear />
            </div>
        </div>
    );
}

export default History;
