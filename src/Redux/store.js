import { createStore, applyMiddleware } from "redux";
import { Reducer } from "./reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

// console.log(store.getState());
