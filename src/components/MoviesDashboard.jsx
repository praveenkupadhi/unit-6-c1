import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getMovieData, loadingStatus } from "../Redux/actions";

const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const MoviesDashboard = () => {
	// to get all movies list on component mounts
	const data = useSelector((store) => store.movies.data);
	const isLoading = useSelector((store) => store.movies.isLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		//   dispatch an action to the store
		axios
			.get("https://movie-fake-server.herokuapp.com/data")
			.then((res) => {
				dispatch(getMovieData(res.data));
				dispatch(loadingStatus(false));
			})
			.catch((err) => console.log(err));
	}, [dispatch]);

	//    filter by genre
	const handleFilter = (e) => {
		// dispach filterby genre action to the store
		if (e.target.value !== "select-genre") {
			// const filterData = data.filter((item) => {
			// 	return item.genre === e.target.value;
			// });
			// dispatch(loadingStatus(true));
			// dispatch(getMovieData(filterData));
			// dispatch(loadingStatus(false));
			axios
				.get(`https://movie-fake-server.herokuapp.com/data?q=${e.target.value}`)
				.then((res) => {
					dispatch(loadingStatus(true));
					dispatch(getMovieData(res.data));
					dispatch(loadingStatus(false));
				});
		} else {
			axios.get(`https://movie-fake-server.herokuapp.com/data`).then((res) => {
				dispatch(loadingStatus(true));
				dispatch(getMovieData(res.data));
				dispatch(loadingStatus(false));
			});
		}
	};

	//sort A-Z
	const sortAscending = () => {
		const sortData = data.sort((a, b) => {
			const movieNameA = a.movie_name.toUpperCase(); // ignore upper and lowercase
			const movieNameB = b.movie_name.toUpperCase(); // ignore upper and lowercase
			if (movieNameA < movieNameB) {
				return -1;
			}
			if (movieNameA > movieNameB) {
				return 1;
			}
			return 0;
		});
		// console.log(sortData);
		dispatch(loadingStatus(true));
		dispatch(getMovieData(sortData));
		dispatch(loadingStatus(false));
	};

	const sortDescending = () => {
		let sortData = data.sort((a, b) => {
			const movieNameA = a.movie_name.toUpperCase(); // ignore upper and lowercase
			const movieNameB = b.movie_name.toUpperCase(); // ignore upper and lowercase
			if (movieNameA > movieNameB) {
				return -1;
			}
			if (movieNameA < movieNameB) {
				return 1;
			}
			return 0;
		});
		// console.log(sortData);
		dispatch(loadingStatus(true));
		dispatch(getMovieData(sortData));
		dispatch(loadingStatus(false));
	};

	return (
		<>
			<h2>Movies</h2>
			<div>
				<button onClick={sortAscending}>Sort A-Z</button>
				<button onClick={sortDescending}>Sort Z-A</button>
			</div>
			<select onChange={handleFilter}>
				<option value="select-genre">--Select Genre--</option>
				{genres.map((e, i) => (
					<option key={i} value={e}>
						{e}
					</option>
				))}
			</select>
			<div className="movies-list">
				{/* map through the movie list and display the results */}
				{isLoading ? (
					<h3>Loading...</h3>
				) : (
					data.map((e) => (
						<>
							<NavLink
								to={`${e.id}`}
								style={{ textDecoration: "none", color: "black" }}
							>
								<div key={e.id}>
									<img src={e.image_url} />
									<h3>Movie Name : {e.movie_name}</h3>
									<h4>Rating : {e.rating} / 10</h4>
								</div>
							</NavLink>
						</>
					))
				)}
			</div>
		</>
	);
};
