import React from "react";

function IconHistoryToggle({ showMenu }) {
    return (
        <button className="history-item__menu-icon" onClick={showMenu}>
            <svg
                width="4"
                height="18"
                viewBox="0 0 4 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg-grey"
            >
                <circle cx="2" cy="2" r="2" fill="#999999" />
                <circle cx="2" cy="9" r="2" fill="#999999" />
                <circle cx="2" cy="16" r="2" fill="#999999" />
            </svg>
        </button>
    );
}

export default IconHistoryToggle;
