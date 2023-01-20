import { combineReducers } from "redux";
import { todoReducer } from "./TodoReducer/TodoReducer";

export const combinedReducer = combineReducers({
  todo: todoReducer,
});
