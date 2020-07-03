import { combineReducers } from "redux";

import { historyItemReducer, historyMenuReducer } from "./historyItemsReducer";
import { fullScreenReducer } from "./fullScreenReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
    items: historyItemReducer,
    fullScreen: fullScreenReducer,
    historyMenu: historyMenuReducer,
    auth: authReducer,
});
