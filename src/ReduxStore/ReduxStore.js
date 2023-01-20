import { applyMiddleware, createStore } from "redux";
import { combinedReducer } from "./CombinedReducer";
import thunk from "redux-thunk";

export const store = createStore(combinedReducer, applyMiddleware(thunk));
