import React from "react";
import IconFromat from "./icons/IconFromat";

function AppBottom({ isValid, formatRequest, isRequesting }) {
    return (
        <div className="console__bottom">
            <button
                type="submit"
                className={`blue-btn ${isRequesting ? "submitting" : ""}`}
                form="request-form"
                disabled={!isValid}
            >
                <i className="spinner"></i>Отправить
            </button>
            <a
                href="https://github.com/atomr-web/react-api-console"
                target="_blank"
                rel="noopener noreferrer"
            >
                @react-api-console
            </a>
            <button
                className="btn-transparent"
                disabled={!isValid || isRequesting}
                onClick={formatRequest}
            >
                <IconFromat />
                Форматировать
            </button>
        </div>
    );
}

export default AppBottom;
