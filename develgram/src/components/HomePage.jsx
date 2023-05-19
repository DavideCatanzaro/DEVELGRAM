import Navbar from "./NavbarHome";
import "./homePage.css";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="App">
        <div className="App-header">
          <img src="logo.png" className="App-logo" alt="logo" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
