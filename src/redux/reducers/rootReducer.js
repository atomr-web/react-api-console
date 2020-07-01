import { combineReducers } from "redux";

import { historyItemReducer, historyMenuReducer } from "./historyItemsReducer";
import { fullScreenReducer } from "./fullScreenReducer";

export const rootReducer = combineReducers({
    items: historyItemReducer,
    fullScreen: fullScreenReducer,
    historyMenu: historyMenuReducer,
});
