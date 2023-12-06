import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/about">
          About Us
        </NavLink>
        <NavLink to="/contact">
          Contact Us
        </NavLink>
        <NavLink to="/itemdetail/2">
          Item Detail
        </NavLink>
      </div>
    </nav>
  );
}