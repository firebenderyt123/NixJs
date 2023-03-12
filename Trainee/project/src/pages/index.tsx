import { NextPage } from "next";
import { HugeBanner } from "@components/simple";
import { ProductsList } from "@components/smart";

const Home: NextPage = () => {
	return (
		<>
			<HugeBanner />
			<ProductsList />
		</>
	);
};

export default Home;
