import React, { useState, useEffect } from "react";
import IconHistoryToggle from "./icons/IconHistoryToggle";
import IconHistoryStatusTrue from "./icons/IconHistoryStatusTrue";
import IconHistoryStatusFalse from "./icons/IconHistoryStatusFalse";
import HistoryItemMenu from "./HistoryItemMenu";
import { CopyToClipboard } from "react-copy-to-clipboard";

function HistoryItem({ status, name, query }) {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [valQuery, setValQuery] = useState();

    useEffect(() => {
        setValQuery(query);
    }, [query]);

    const showMenu = (e) => {
        setIsOpenMenu(!isOpenMenu);
    };

    const copyClipboared = () => {
        setIsOpenMenu(false);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };

    return (
        <div className="header-history__item">
            <CopyToClipboard text={valQuery} onCopy={() => copyClipboared()}>
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

export default HistoryItem;
