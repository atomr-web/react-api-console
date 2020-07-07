import React from "react";
import ConsoleRequest from "./ConsoleRequest";
import ConsoleResponse from "./ConsoleResponse";
import { connect } from "react-redux";

function AppConsoles({ response, isSuccess }) {
    response = JSON.stringify(response, null, "\t");

    return (
        <div className="console">
            <ConsoleRequest />
            <div className="drag-consoles">
                <span></span>
            </div>
            <ConsoleResponse response={response} isSuccess={isSuccess} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        response: state.console.response,
        isSuccess: state.console.isSuccess,
    };
};

export default connect(mapStateToProps, null)(AppConsoles);
