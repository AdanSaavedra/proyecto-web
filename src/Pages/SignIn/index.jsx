import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import './signin.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
  if (username !== '' && password !== '') {
    setIsButtonDisabled(false);
  } else {
    setIsButtonDisabled(true);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("Iniciar sesión con:", username, password);
};

/* INTENTO FALLIDO DE CONECTAR A PHP
//Para enviar los datos al servidor
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('src/Pages/SignIn/signin.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();
      console.log(data); //Prueba para ver si funciona
    } catch (error) {
      console.error('Error:', error);
    }
  };
*/

//Formulario
  return (
    //Filtro de imagen de fondo
    <div className={'main'}>
      {/*Imagen de fondo*/}
      <img src='src/Pages/Images/Background1.png' className={'bg'} />
      <div className={'form'}>
        {/*Titulo*/}
        <h2>Inicio de Sesión</h2>
        <form onSubmit={handleSubmit}>
          {/*Usuario*/}
          <div className={'user'}>
            <label>Usuario:</label>
            <input
              type='text'
              id='username'
              name='username'
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          {/*Contrasenia*/}
          <div className={'pasword'}>
            <label>Contraseña:</label>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          {/*Boton y link de ir a registro*/}
          <div className={'form_end'}>
            {/*Boton*/}
            <div className={'aceptar'}>
              <button type='submit' className={isButtonDisabled ? 'disabled' : ''} disabled={isButtonDisabled}>Iniciar Sesión</button>
            </div>
            {/*Ir a registro*/}
            <div className={'texto'}>
              <p>
              ¿No tienes una cuenta? <br></br>
              <NavLink to={'/register'}>Regístrate aquí.</NavLink>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
