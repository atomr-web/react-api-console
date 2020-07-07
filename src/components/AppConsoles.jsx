import React from "react";
import ConsoleRequest from "./ConsoleRequest";
import ConsoleResponse from "./ConsoleResponse";
import { connect } from "react-redux";

function AppConsoles({ state }) {
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

const mapStateToProps = (state) => {
    return {
        state,
    };
};

export default connect(mapStateToProps, null)(AppConsoles);
