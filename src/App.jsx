import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import NavBar from "./components/NavBar/NavBar";
import Pricing from "./components/Pricing/Pricing";
import Rating from "./components/Rating/Rating";
import Workflow from "./components/Workflow/Workflow";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Rating />
      <GetStarted />
      <Pricing />
      <Workflow />
      <Footer />
    </>
  );
}

export default App;
