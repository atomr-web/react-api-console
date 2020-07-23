import React, { useRef } from "react";
import ConsoleRequest from "./ConsoleRequest";
import ConsoleResponse from "./ConsoleResponse";

function AppConsoles({
    response,
    isSuccess,
    submitRequest,
    ohChange,
    isValid,
    value,
}) {
    response = JSON.stringify(response, null, "\t");
    const requestField = useRef(null);

    const dragConsole = () => {
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResize);
        window.addEventListener("selectstart", (e) => e.preventDefault());
    };

    const resize = (e) => {
        const elField = requestField.current;
        const minWidth = 250;

        if (e.clientX - elField.offsetLeft >= minWidth) {
            elField.style.width =
                ((e.clientX - elField.offsetLeft) / window.innerWidth) * 100 +
                "%";
        }
    };

    const stopResize = (e) => {
        window.removeEventListener("mousemove", resize);
        window.removeEventListener("mouseup", stopResize);
        window.removeEventListener("selectstart", (e) => e.preventDefault());
    };

    return (
        <div className="console">
            <ConsoleRequest
                submitRequest={submitRequest}
                ohChange={ohChange}
                isValid={isValid}
                value={value}
                requestField={requestField}
            />
            <div className="drag-consoles" onMouseDown={dragConsole}>
                <span></span>
            </div>
            <ConsoleResponse response={response} isSuccess={isSuccess} />
        </div>
    );
}

export default AppConsoles;
