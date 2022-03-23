import {
	FILTER_BY_GENRE,
	GET_ALL_MOVIES_DATA,
	LOADING_STATUS,
	SORT_A_Z,
	SORT_Z_A,
} from "./actionTypes";

// thunk call to fetch movie list
export const getMovieData = (payload) => ({
	type: GET_ALL_MOVIES_DATA,
	payload,
});

export const loadingStatus = (payload) => ({
	type: LOADING_STATUS,
	payload,
});

export const sortAZ = (payload) => ({
	type: SORT_A_Z,
	payload,
});

export const sortZA = (payload) => ({
	type: SORT_Z_A,
	payload,
});

// action object for filter  feature

const filterByGenre = (payload) => ({
	type: FILTER_BY_GENRE,
	payload,
});
