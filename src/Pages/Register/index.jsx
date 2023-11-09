import { NavLink } from "react-router-dom";
import "./register.css";
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [userType, setUserType] = useState('1');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [passwordError, setPasswordError] = useState(false); // Variable para manejar errores en el campo de contraseña
  const [confirmPasswordError, setConfirmPasswordError] = useState(false); // Variable para manejar errores en el campo de confirmar contraseña
  const [errorMessage, setErrorMessage] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    checkFields(event.target.value, lastName, username, userType, password, confirmPassword);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    checkFields(firstName, event.target.value, username, userType, password, confirmPassword);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    checkFields(firstName, lastName, event.target.value, userType, password, confirmPassword);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
    checkFields(firstName, lastName, username, event.target.value, password, confirmPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    checkFields(firstName, lastName, username, userType, event.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    checkFields(firstName, lastName, username, userType, password, event.target.value);
  };

  const checkFields = (firstName, lastName, username, userType, password, confirmPassword) => {
    if (firstName !== '' && lastName !== '' && username !== '' && userType !== '' && password !== '' && confirmPassword !== '') {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden.');
      //Se agregan las clases de error a los campos de contraseña
      setPasswordError(true);
      setConfirmPasswordError(true);
    } else {
      //Se maneja el envío de datos del formulario al servidor
      console.log("Registrarse con:", firstName, lastName, username, userType, password, confirmPassword);
      setErrorMessage(''); //Se lmpia el mensaje de error si las contraseñas coinciden
      //Se quitan las clases de error de los campos de contraseña
      setPasswordError(false);
      setConfirmPasswordError(false);
    }
  };

  return (
    <div className={'main'}>
      <img src='src/Pages/Images/Background1.png' className={'bg'} />
      <div className={'form'}>
        <h2>Registro de Usuario</h2>
        <form onSubmit={handleSubmit}>
          <div className={'user'}>
            <label>Nombre:</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
          </div>
          <div className={'user'}>
            <label>Apellido:</label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </div>
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
          <div className={'usertype'}>
            <label>Tipo de Usuario:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="1"
                  checked={userType === '1'}
                  onChange={handleUserTypeChange}
                  required
                />
                Colaborador
              </label>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="2"
                  checked={userType === '2'}
                  onChange={handleUserTypeChange}
                  required
                />
                Administrador
              </label>
            </div>
          </div>
          <div className={'password'}>
            <div className={`pw ${passwordError ? 'error' : ''}`}>
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
            <div className={`pw ${confirmPasswordError ? 'error' : ''}`}>
              <label>Confirmar contraseña:</label>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
          </div>
          <div className={'form_end'}>
            <div className={'texto'}>
              <p>¿Ya tienes una cuenta? <br></br><NavLink to={'/'}>Inicia sesión.</NavLink></p>
            </div>
            <div className={'aceptar'}>
              <button type='submit' className={isButtonDisabled ? 'disabled' : ''} disabled={isButtonDisabled}>Registrarse</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;