import { Route, Routes } from "react-router";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { MoviesDashboard } from "../components/MoviesDashboard";
import { SingleMovieDetails } from "../components/SingleMovieDetails";

export const MainRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="movies" element={<MoviesDashboard />} />
				<Route path="movies/:id" element={<SingleMovieDetails />} />
			</Routes>
		</>
	);
};
