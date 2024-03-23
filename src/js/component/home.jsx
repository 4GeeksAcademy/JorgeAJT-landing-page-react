import React from "react";

// Components
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";

//Images
import smashBurgerImage from "../../img/smash-burger.jpg" 

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container pt-4">
				<div className="row">
					<div className="col-12">
						<Jumbotron />
					</div>
				</div>
				<div className="row">
					<div className="col-3">
						<Card 
							imageUrl = {smashBurgerImage}
							title = "Card Title"
							description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut porro qui perferendis, laboriosam sapiente"
							buttonLabel = "Find Out More!"
						/>
					</div>
					<div className="col-3">
						<Card 
							imageUrl = {smashBurgerImage}
							title = "Card Title"
							description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut porro qui perferendis, laboriosam sapiente"
							buttonLabel = "Find Out More!"
						/>
					</div>
					<div className="col-3">
						<Card 
							imageUrl = {smashBurgerImage}
							title = "Card Title"
							description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut porro qui perferendis, laboriosam sapiente"
							buttonLabel = "Find Out More!"
						/>
					</div>
					<div className="col-3">
						<Card 
							imageUrl = {smashBurgerImage}
							title = "Card Title"
							description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut porro qui perferendis, laboriosam sapiente"
							buttonLabel = "Find Out More!"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
