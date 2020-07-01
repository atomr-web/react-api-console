import React from "react";
import { connect } from "react-redux";
import {
    toggleCopyText,
    toggleHistoryMenu,
    menuHistoryRun,
} from "../redux/actions";
import IconHistoryToggle from "./icons/IconHistoryToggle";
import IconHistoryStatusTrue from "./icons/IconHistoryStatusTrue";
import IconHistoryStatusFalse from "./icons/IconHistoryStatusFalse";
import HistoryItemMenu from "./HistoryItemMenu";
import { CopyToClipboard } from "react-copy-to-clipboard";

function HistoryItem({
    status,
    name,
    query,
    id,
    toogleCopyText,
    isShowMenu,
    isCopied,
    toggleMenu,
    menuHistoryRUN,
}) {
    const onCopyClipboard = () => {
        toogleCopyText(id, true);
        toggleMenu(id, false);
        setTimeout(() => {
            toogleCopyText(id, false);
        }, 1000);
    };

    return (
        <div className="header-history__item">
            <CopyToClipboard text={query} onCopy={() => onCopyClipboard(id)}>
                <div>
                    <span className="history-item__status">
                        {status === true ? (
                            <IconHistoryStatusTrue />
                        ) : (
                            <IconHistoryStatusFalse />
                        )}
                    </span>
                    <span className="history-item__title">{name}</span>
                </div>
            </CopyToClipboard>
            <IconHistoryToggle toggleMenu={() => toggleMenu(id, !isShowMenu)} />
            <div
                className={`history-item__copy-text ${isCopied ? "show" : ""} `}
            >
                Скопировано
            </div>
            {isShowMenu ? <HistoryItemMenu /> : null}
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        toogleCopyText: (id, isCopied) =>
            dispatch(toggleCopyText(id, isCopied)),
        toggleMenu: (id, isShowMenu) =>
            dispatch(toggleHistoryMenu(id, isShowMenu)),
        menuHistoryRUN: (id) => dispatch(menuHistoryRun(id)),
    };
};

export default connect(null, mapDispatchToProps)(HistoryItem);
