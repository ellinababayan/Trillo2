import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HeaderContainer from "./components/header/HeaderContainer";
import NavBarContainer from "./components/navbar/NavbarContainer";
import "../src/draftSTyle/main.css";
import HotelsContainer from "./pages/hotels/HotelsContainer";
import HomeContainer from "./pages/home/HomeContainer";
import FlightsContainer from "./pages/flights/FlightsContainer";
import CarContainer from "./pages/car/CarContainer";
import ToursContainer from "./pages/tours/ToursContainer";
import LoginContainer from "./pages/login/LoginContainer";
import authService from "./service/auth.service"; //new

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // new
  useEffect(() => {
    // Check if the user is authenticated when the app starts
    const checkAuthentication = async () => {
      const isAuthenticated = await authService.checkAuthentication();

      console.log("Is Authenticated:", isAuthenticated);
      setIsLoggedIn(isAuthenticated);
    };

    checkAuthentication();
  }, []); //new

  return (
    <div className="container">
      <BrowserRouter>
        <HeaderContainer
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <div className="content">
          <NavBarContainer />
          <Routes>
            <Route path="/" element={<HomeContainer />}></Route>
            <Route path="/hotel" element={<HotelsContainer />}></Route>
            <Route path="/flight" element={<FlightsContainer />}></Route>
            <Route path="/car" element={<CarContainer />}></Route>
            <Route path="/tours" element={<ToursContainer />}></Route>
            <Route
              path="/login"
              element={
                <LoginContainer
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
