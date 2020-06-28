import React, { useState, useRef } from "react";
import IconHistoryToggle from "./icons/IconHistoryToggle";
import IconHistoryStatusTrue from "./icons/IconHistoryStatusTrue";
import IconHistoryStatusFalse from "./icons/IconHistoryStatusFalse";
import HistoryItemMenu from "./HistoryItemMenu";

function HistoryItem({ status, name }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const itemRef = useRef(null);

  const showMenu = (e) => {
    setIsOpenMenu(!isOpenMenu);

    // console.log(menuRef);

    let itemCoords = itemRef.current.getBoundingClientRect();
    let itemWidth = itemRef.current.getBoundingClientRect().width;
    // console.log(itemCoords);

    // let menuWidth = menuRef.current.getBoundingClientRect().width;

    // let diff = itemWidth - menuWidth;

    // menuRef.current.style.left = itemCoords.left + diff + "px";
    // menuRef.current.style.top = itemCoords.bottom + "px";
  };

  return (
    <div className="header-history__item" ref={itemRef}>
      <span className="history-item__status">
        {status === true ? (
          <IconHistoryStatusTrue />
        ) : (
          <IconHistoryStatusFalse />
        )}
      </span>
      <span className="history-item__title">{name}</span>
      <IconHistoryToggle showMenu={showMenu} />
      {isOpenMenu ? <HistoryItemMenu isOpenMenu={isOpenMenu} /> : null}
    </div>
  );
}

export default HistoryItem;
