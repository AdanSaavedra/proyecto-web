import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="home">
        <li className="home">
          <NavLink to={"/"} className="home">Cerrar Sesion</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
