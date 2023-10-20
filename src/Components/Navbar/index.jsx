import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Cerrar Sesion</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
