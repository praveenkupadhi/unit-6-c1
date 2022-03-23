import {
	GET_ALL_MOVIES_DATA,
	LOADING_STATUS,
	FILTER_BY_GENRE,
	SORT_A_Z,
	SORT_Z_A,
} from "./actionTypes";

const initState = {
	data: [],
	isLoading: true,
};

export const Reducer = (store = initState, action) => {
	switch (action.type) {
		case GET_ALL_MOVIES_DATA:
			return { ...store, data: action.payload };
		case FILTER_BY_GENRE:
			return { ...store, data: action.payload };
		case LOADING_STATUS:
			return { ...store, isLoading: action.payload };
		case SORT_A_Z:
			return { ...store, data: action.payload };
		case SORT_Z_A:
			return { ...store, data: action.payload };
		default:
			return { ...store };
	}
	// add the switch statement for different actions
};
