import { combineReducers } from "redux";
import { historyItemReducer } from "./historyItemsReducer";

export const rootReducer = combineReducers({
    items: historyItemReducer,
});
