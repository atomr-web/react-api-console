import { combineReducers } from "redux";

import { historyItemReducer, historyMenuReducer } from "./historyItemsReducer";
import { fullScreenReducer } from "./fullScreenReducer";
import { authReducer } from "./authReducer";
import { consoleReducer } from "./consoleReducer";

export const rootReducer = combineReducers({
    items: historyItemReducer,
    fullScreen: fullScreenReducer,
    historyMenu: historyMenuReducer,
    auth: authReducer,
    console: consoleReducer,
});
