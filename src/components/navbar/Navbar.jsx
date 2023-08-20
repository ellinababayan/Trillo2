import React from "react";
import { NavLink } from "react-router-dom";
import { Plane, Hotel, Car, Tours } from "../svg/Icons";
import "../../draftSTyle/main.css";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item">
          <NavLink
            to="/hotel"
            className={(navData) =>
              navData.isActive
                ? "side-nav__item--active side-nav__link--active "
                : "side-nav__link side-nav__item"
            }
          >
            <Hotel />
            <span>Hotel</span>
          </NavLink>
        </li>

        <li className="side-nav__item">
          <NavLink
            to="/flight"
            className={(navData) =>
              navData.isActive
                ? "side-nav__item--active side-nav__link--active "
                : "side-nav__link side-nav__item"
            }
          >
            <Plane />
            <span>Flight</span>
          </NavLink>
        </li>

        <li className="side-nav__item">
          <NavLink
            to="/car"
            className={(navData) =>
              navData.isActive
                ? "side-nav__item--active side-nav__link--active "
                : "side-nav__link side-nav__item"
            }
          >
            <Car />
            <span>Car Rental</span>
          </NavLink>
        </li>

        <li className="side-nav__item">
          <NavLink
            to="/tours"
            className={(navData) =>
              navData.isActive
                ? "side-nav__item--active side-nav__link--active "
                : "side-nav__link side-nav__item"
            }
          >
            <Tours />
            <span>Tours</span>
          </NavLink>
        </li>
      </ul>

      <div className="legal">
        &copy; 2022 by Ellina Babaian. All rights reserved.
      </div>
    </nav>
  );
};

export default NavBar;
