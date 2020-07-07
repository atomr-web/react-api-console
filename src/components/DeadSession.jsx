import React from "react";

function DeadSession() {
    return (
        <div className="dead-session">
            <div className="dead-session__content">
                <span>Сессия истекла. Авторизуйтесь повторно</span>
                <button className="blue-btn">OK</button>
            </div>
        </div>
    );
}

export default DeadSession;
