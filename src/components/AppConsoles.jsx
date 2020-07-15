import React from "react";
import ConsoleRequest from "./ConsoleRequest";
import ConsoleResponse from "./ConsoleResponse";

function AppConsoles({
    request,
    response,
    isSuccess,
    submitRequest,
    ohChange,
    isValid,
    value,
}) {
    response = JSON.stringify(response, null, "\t");
    return (
        <div className="console">
            <ConsoleRequest
                submitRequest={submitRequest}
                ohChange={ohChange}
                isValid={isValid}
                value={value}
            />
            <div className="drag-consoles">
                <span></span>
            </div>
            <ConsoleResponse response={response} isSuccess={isSuccess} />
        </div>
    );
}

export default AppConsoles;
