import {
	FILTER_BY_GENRE,
	GET_ALL_MOVIES_DATA,
	LOADING_STATUS,
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

// action object for filter  feature

const filterByGenre = (payload) => ({
	type: FILTER_BY_GENRE,
	payload,
});
