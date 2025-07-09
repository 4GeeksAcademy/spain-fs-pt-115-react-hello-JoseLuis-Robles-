import React, { useEffect, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Digit } from "./digit.jsx";
//create your first component
const Home = () => {

	const [timer, setTimer] = useState(0)


	useEffect(() => {

		setTimeout(() => {
			setTimer(value => value + 1)
		}, 1000)

	}, [timer])

	return (
		<main className="=text-center">
			<section className="counter-holder">
				<Digit number={<span className="fa fa-clock"></span>} />
				<div className="6">
					<Digit number={Math.floor(timer / 100000) % 10} />
				</div>
				<div className="5">
					<Digit number={Math.floor(timer / 10000) % 10} />
				</div>
				<div className="4">
					<Digit number={Math.floor(timer / 1000) % 10} />
				</div>
				<div className="3">
					<Digit number={Math.floor(timer / 100) % 10} />
				</div>
				<div className="2">
					<Digit number={Math.floor(timer / 10) % 10} />
				</div>
				<div className="1">
					<Digit number={Math.floor(timer % 10)} />
				</div>
			</section>
		</main>
	);
};

export default Home;