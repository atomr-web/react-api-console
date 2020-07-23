import React from "react";
import { connect } from "react-redux";
import { toggleHistoryMenu } from "../redux/actions/historyActions";
import {
    toggleCopyTimeout,
    historyMenuRun,
    removeHistoryItem,
} from "../redux/actions";
import IconHistoryToggle from "./icons/IconHistoryToggle";
import IconHistoryStatusTrue from "./icons/IconHistoryStatusTrue";
import IconHistoryStatusFalse from "./icons/IconHistoryStatusFalse";
import HistoryItemMenu from "./HistoryItemMenu";

function HistoryItem({
    status,
    name,
    id,
    query,
    isShowMenu,
    isCopied,
    toggleMenu,
    historyMenuRun,
    removeHistoryItem,
    toggleCopyTimeout,
}) {
    return (
        <div className="header-history__item">
            <div onClick={() => historyMenuRun(id, query)}>
                <span className="history-item__status">
                    {status === true ? (
                        <IconHistoryStatusTrue />
                    ) : (
                        <IconHistoryStatusFalse />
                    )}
                </span>
                <span className="history-item__title">{name}</span>
            </div>
            <IconHistoryToggle toggleMenu={() => toggleMenu(id, !isShowMenu)} />
            <div
                className={`history-item__copy-text ${isCopied ? "show" : ""} `}
            >
                Скопировано
            </div>
            {isShowMenu ? (
                <HistoryItemMenu
                    historyMenuRun={historyMenuRun}
                    removeHistoryItem={removeHistoryItem}
                    toggleCopyTimeout={toggleCopyTimeout}
                    id={id}
                    query={query}
                />
            ) : null}
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCopyTimeout: (id) => dispatch(toggleCopyTimeout(id)),
        toggleMenu: (id, isShowMenu) =>
            dispatch(toggleHistoryMenu(id, isShowMenu)),
        historyMenuRun: (id, query) => dispatch(historyMenuRun(id, query)),
        removeHistoryItem: (id) => dispatch(removeHistoryItem(id)),
    };
};

export default connect(null, mapDispatchToProps)(HistoryItem);
