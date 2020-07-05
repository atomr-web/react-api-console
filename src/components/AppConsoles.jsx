import React from "react";
import ConsoleRequest from "./ConsoleRequest";
import ConsoleResponse from "./ConsoleResponse";

function AppConsoles() {
    return (
        <div className="console">
            <ConsoleRequest />
            <div className="drag-consoles">
                <span></span>
            </div>
            <ConsoleResponse />
        </div>
    );
}

export default AppConsoles;
