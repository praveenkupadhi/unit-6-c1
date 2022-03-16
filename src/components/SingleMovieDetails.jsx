import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const SingleMovieDetails = () => {
	// make a request to get the details
	const { id } = useParams();
	const [singleData, setSingleData] = useState({});

	useEffect(() => {
		axios
			.get(`https://movie-fake-server.herokuapp.com/data/${id}`)
			.then((res) => {
				setSingleData(res.data);
			});
	}, [id]);

	return (
		<>
			<div key={singleData.id}>
				<img src={singleData.image_url} />
				<h3>Movie Name : {singleData.movie_name}</h3>
				<h4>Rating : {singleData.rating} / 10</h4>
				<h3>Genre : {singleData.genre}</h3>
				<h5>Release Date : {singleData.release_date}</h5>
			</div>
		</>
	);
};
