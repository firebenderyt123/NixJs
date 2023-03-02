import React from "react";
import { HugeBanner, ProductsList } from "@components/index";
import "./styles.scss";

const Home = () => {
	return (
		<>
			<HugeBanner />
			<ProductsList />
		</>
	);
};

export default Home;
