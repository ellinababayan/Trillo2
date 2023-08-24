import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HeaderContainer from "./components/header/HeaderContainer";
import NavBarContainer from "./components/navbar/NavbarContainer";
import "../src/draftSTyle/main.css";
import HotelsContainer from "./pages/hotels/HotelsContainer";
import HomeContainer from "./pages/home/HomeContainer";
import FlightsContainer from "./pages/flights/FlightsContainer";
import CarContainer from "./pages/car/CarContainer";
import ToursContainer from "./pages/tours/ToursContainer";

function App() {
  return (
    <div className="container">
      <HeaderContainer />
      <BrowserRouter>
        <div className="content">
          <NavBarContainer />
          <Routes>
            <Route path="/" element={<HomeContainer />}></Route>
            <Route path="/hotel" element={<HotelsContainer />}></Route>
            <Route path="/flight" element={<FlightsContainer />}></Route>
            <Route path="/car" element={<CarContainer />}></Route>
            <Route path="/tours" element={<ToursContainer />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
