import {
	GET_ALL_MOVIES_DATA,
	LOADING_STATUS,
	FILTER_BY_GENRE,
} from "./actionTypes";

const initState = {
	data: [],
	filterData: [],
	isLoading: false,
	isError: false,
};

export const Reducer = (store = initState, action) => {
	switch (action.type) {
		case GET_ALL_MOVIES_DATA:
			return { ...store, data: action.payload };
		case FILTER_BY_GENRE:
			return { ...store, data: action.payload };
		case LOADING_STATUS:
			return { ...store, isLoading: action.payload };
		default:
			return { ...store };
	}
	// add the switch statement for different actions
};
