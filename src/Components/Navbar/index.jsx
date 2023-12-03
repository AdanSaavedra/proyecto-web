import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useUser } from '../../CardContext'


const Navbar = () => {
  const { userName } = useUser();
  return (
    <nav>
      <ul className="home">
        <li className="mensaje"> Hola, {userName}!!!!! </li>
        <li className="home">
        <NavLink to={"/"} className="home">Cerrar Sesion</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
