import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/NavbarHome";
import "../template/homePage.css";

const HomePage = () => {
	return (
		<>
			<div className="App">
				<Navbar />
				<div className="App-header bg-white">
					<img src="log.png" className="App-logo bg-transparent" alt="logo" />
				</div>
				<Footer />
			</div>
		</>
	);
}

export default HomePage;
