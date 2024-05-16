import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { eventReducer } from "./reducer";

const rootReducer = combineReducers({
  event: eventReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
