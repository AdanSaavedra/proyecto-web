import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useUser } from '../../CardContext'


const Navbar = () => {
  const { userName } = useUser();
  let cookie = '';
  if (userName !== null) {
    const getcookie = () => {
      let cookie = document.cookie
        ?.split('; ')
        ?.find(row => row?.startsWith(userName))
        ?.split('=')[1];
      return cookie;
    }
    cookie = getcookie();
  }
  return (
    <nav>
      <ul className="home">
        <li className="mensaje"> {userName ? `Hola, ${cookie}!!!` : `No hay sesión`}!!!!! </li>
        <li className="home">
          <NavLink to={"/"} className="home">Cerrar Sesion</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
