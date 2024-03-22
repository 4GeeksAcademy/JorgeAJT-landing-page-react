import React from "react";

//include images into your bundle
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container pt-4">
				<Jumbotron />
			</div>
		</div>
	);
};

export default Home;
