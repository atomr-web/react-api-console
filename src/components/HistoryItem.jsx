import React, { useState } from "react";
import { connect } from "react-redux";
import { isCopiedHisttoryItem } from "../redux/actions";
import IconHistoryToggle from "./icons/IconHistoryToggle";
import IconHistoryStatusTrue from "./icons/IconHistoryStatusTrue";
import IconHistoryStatusFalse from "./icons/IconHistoryStatusFalse";
import HistoryItemMenu from "./HistoryItemMenu";
import { CopyToClipboard } from "react-copy-to-clipboard";

function HistoryItem({ status, name, query, onClickCopied, id, isCopied }) {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const showMenu = (e) => {
        setIsOpenMenu(!isOpenMenu);
    };

    const copyClipboared = () => {
        setIsOpenMenu(false);
        onClickCopied(id);
        setTimeout(() => {
            onClickCopied(id);
        }, 1000);
    };

    return (
        <div className="header-history__item">
            <CopyToClipboard text={query} onCopy={() => copyClipboared()}>
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
            <IconHistoryToggle showMenu={showMenu} />
            <div
                className={`history-item__copy-text ${isCopied ? "show" : ""} `}
            >
                Скопировано
            </div>
            {isOpenMenu ? (
                <HistoryItemMenu
                    isOpenMenu={isOpenMenu}
                    copyClipboared={copyClipboared}
                />
            ) : null}
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickCopied: (id) => dispatch(isCopiedHisttoryItem(id)),
    };
};

export default connect(null, mapDispatchToProps)(HistoryItem);
