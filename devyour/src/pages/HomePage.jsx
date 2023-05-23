import Navbar from "../components/NavbarHome";
import "../template/homePage.css";

function HomePage() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="App-header bg-white">
          <img src="log.png" className="App-logo" alt="logo" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
