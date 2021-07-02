import { TypedUseSelectorHook, useSelector } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/root";

export const store = createStore(rootReducer);