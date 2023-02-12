
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import { auditReportReducer } from "./reducer";



const reducer = combineReducers({
  // cart: cartReducer
  publisher: auditReportReducer,
});

export default configureStore({
  reducer,
  composeWithDevTools,
});