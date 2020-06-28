import React from "react";
import IconFromat from "./icons/IconFromat";

function AppBottom() {
    return (
        <div className="console__bottom">
            <button type="submit" form="request-form">
                Отправить
            </button>
            <a
                href="https://github.com/atomr-web/react-api-console"
                target="_blank"
                rel="noopener noreferrer"
            >
                @react-api-console
            </a>
            <button className="btn-transparent">
                <IconFromat />
                Форматировать
            </button>
        </div>
    );
}

export default AppBottom;
