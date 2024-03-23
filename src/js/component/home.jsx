import React from "react";

// Components
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//Images
import smashBurgerImage from "../../img/smash-burger.jpg" 
import pizzaImage from "../../img/pizza-pepperoni.jpg"
import noodlesImage from "../../img/noodles.jpg"
import tortillaImage from "../../img/tortilla-patatas.jpg"

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container pt-4 px-0">
				<div className="row">
					<div className="col-12 ms-1 ms-md-0">
						<Jumbotron />
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-lg-6 col-xl-3 mb-3 ms-1 ms-md-0">
						<Card 
							imageUrl = {smashBurgerImage}
							title = "Smash Burger"
							description = "When you smash the burgers down on a super-hot grill, the fat has nowhere to go but back up into the burger patty meaning you're essentially cooking your burger in its own beefy juices."
							buttonLabel = "Find Out More!"
							buttonUrl = "https://www.ourmodernkitchen.com/the-art-of-the-smashburger/#:~:text=Minced%20chuck%20steak%20is%20gold,in%20its%20own%20beefy%20juices."
						/>
					</div>
					<div className="col-12 col-lg-6 col-xl-3 mb-3 ms-1 ms-md-0">
						<Card 
							imageUrl = {pizzaImage}
							title = "Pizza Pepperoni"
							description = "Pepperoni is by far the most popular pizza topping in the United States.It's added to 36% of all pies, and Americans consume more than 250 MILLION pounds of pepperoni annually."
							buttonLabel = "Find Out More!"
							buttonUrl = "https://www.hungryhowies.com/article/10-most-popular-pizza-toppings-united-states#:~:text=1.,topping%20in%20the%20United%20States."
						/>
					</div>
					<div className="col-12 col-lg-6 col-xl-3 mb-3 ms-1 ms-md-0">
						<Card 
							imageUrl = {noodlesImage}
							title = "Noodles"
							description = "There are so many different types of Asian noodles out there – which is great news if you’re as much of a noodle dish lover as me. But with great variety comes great potential confusion."
							buttonLabel = "Find Out More!"
							buttonUrl = "https://www.marionskitchen.com/article/types-of-noodles-guide/"
						/>
					</div>
					<div className="col-12 col-lg-6 col-xl-3 mb-3 ms-1 ms-md-0">
						<Card 
							imageUrl = {tortillaImage}
							title = "Tortilla de patatas"
							description = "What is the best potato omelet? It is a very difficult question to answer, but you can read about one of the considered best recipes for this delicious Spanish food."
							buttonLabel = "Find Out More!"
							buttonUrl = "https://www.elle.com/es/gourmet/gastronomia/a43204982/como-hacer-la-mejor-tortilla-de-patata/"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
