import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./signin.css";
import { useUser } from "../../CardContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    checkFields(event.target.value, password);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    checkFields(username, event.target.value);
  };

  //Para validar que los campos esten llenos
  const checkFields = (username, password) => {
    if (username !== "" && password !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:80/backend/login_process.php", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `username=${encodeURIComponent(
          username
        )}&password=${encodeURIComponent(password)}`,
      });

      const data = await response.json();
      console.log("Response:", data);

      // handling de la respuesta del script
      if (response.ok) {
        const userId = data.userId;
        const userName = data.username;
        const type = data.type;
        login(userId, userName, type);
        console.log("Login successful");
        console.log("UserId:", userId, userName, type);
        navigate("/home");
      } else {
        console.error("Login failed:", data);
        // no se que poner si hay un error xd aqui va un mensaje de error ej "usuario incorrecto, credenciales incorrectas"
      }
    } catch (error) {
      console.error("Error:", error);
    }
    console.log("Iniciar sesión con:", username, password);
  };

  //Formulario
  return (
    //Filtro de imagen de fondo
    <div className={"signin_main"}>
      {/*Imagen de fondo*/}
      <img src="src/Pages/Images/Background1.png" className={"signin_bg"} />
      <div className={"signin_form_container"}>
        {/*Titulo*/}
        <h2>Inicio de Sesión</h2>
        <form onSubmit={handleSubmit} className={"signin_form"}>
          {/*Usuario*/}
          <div className={"signin_user"}>
            <label>Usuario:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          {/*Contrasenia*/}
          <div className={"signin_pasword"}>
            <label>Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          {/*Boton y link de ir a registro*/}
          <div className={"signin_form_end"}>
            {/*Boton*/}
            <div className={"signin_aceptar"}>
              <button
                type="submit"
                className={isButtonDisabled ? "disabled" : ""}
                disabled={isButtonDisabled}
              >
                Iniciar Sesión
              </button>
            </div>
            {/*Ir a registro*/}
            <div className={"signin_texto"}>
              <p>
                ¿No tienes una cuenta? <br></br>
                <NavLink to={"/register"}>Regístrate aquí.</NavLink>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
