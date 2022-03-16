import { NavLink } from "react-router-dom";

const links = [
	{
		title: "Home",
		link: "/",
		id: "header-link-home",
	},
	{
		title: "About",
		link: "/about",
		id: "header-link-about",
	},
	{
		title: "Movies",
		link: "/movies",
		id: "header-link-movies",
	},
	//   add the other link as well
];
export const Navbar = () => {
	return (
		//map through the link ad display it in header
		<div id="navbar">
			<NavLink to={links[0].link} id={links[0].id}>
				{links[0].title}
			</NavLink>
			<NavLink to={links[1].link} id={links[1].id}>
				{links[1].title}
			</NavLink>
			<NavLink to={links[2].link} id={links[2].id}>
				{links[2].title}
			</NavLink>
		</div>
	);
};
