import { combineReducers } from "redux";
import { Reducer } from "./reducer";

export const rootReducer = combineReducers({
	movies: Reducer,
});
