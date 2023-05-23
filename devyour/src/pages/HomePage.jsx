import Footer from "../components/Footer";
import Navbar from "../components/NavbarHome";
import "../template/homePage.css";

function HomePage() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div  className="App-header bg-white">
          <img src="log.png" className="App-logo bg-transparent" alt="logo" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
