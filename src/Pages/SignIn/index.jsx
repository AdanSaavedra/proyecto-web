import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <h1>Testing SignIn</h1>
      <ul>
        <li>
          <NavLink to={"/home"}>Iniciar Sesion</NavLink>
        </li>
        <li>
          <NavLink to={"/register"}>Registar</NavLink>
        </li>
      </ul>
    </>
  );
};

export default SignIn;
