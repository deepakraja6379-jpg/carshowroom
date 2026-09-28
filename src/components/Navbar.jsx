import { NavLink } from "react-router-dom";
import { useCars } from "../context/CarContext";

function Navbar() {
  const { favorites } = useCars();

  return (
    <header className="navbar">

      <div className="logo">
        BOB<span>Cars</span>
      </div>

      <nav>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/cars">Cars</NavLink>

        <NavLink to="/services">Services</NavLink>

        <NavLink to="/test-drive">
          Test Drive
        </NavLink>

        <NavLink to="/favorites">
          Favorites ({favorites.length})
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>

        <NavLink to="/admin">
          Admin
        </NavLink>
      </nav>

    </header>
  );
}

export default Navbar;