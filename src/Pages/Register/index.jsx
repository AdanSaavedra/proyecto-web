import { NavLink, useNavigate } from "react-router-dom";
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

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden.');
      //Se agregan las clases de error a los campos de contraseña
      setPasswordError(true);
      setConfirmPasswordError(true);
    } else {
      
  try {
    const response = await fetch('http://localhost/backend/signup_process.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `name=${encodeURIComponent(firstName)}&lastname=${encodeURIComponent(lastName)}&username=${encodeURIComponent(username)}&contraseña=${encodeURIComponent(password)}&Type=${encodeURIComponent(userType)}`,
    });

    if (response.ok) { 
      const data = await response.json();

      if (data.status === 'success') {
        console.log('Registro exitoso');
        setRegistrationSuccess(true);
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        console.error('Error de registro:', data.message);
        // Manejar el error de registro, por ejemplo, mostrar un mensaje de error
      }
    } else {
      console.error('Error de red:', response.status, response.statusText);
      // Manejar errores de red, por ejemplo, mostrar un mensaje de error general
    }
  } catch (error) {
    console.error('Error:', error);
  }
      console.log("Registrarse con:", firstName, lastName, username, userType, password, confirmPassword);
      setErrorMessage(''); //Se lmpia el mensaje de error si las contraseñas coinciden
      //Se quitan las clases de error de los campos de contraseña
      setPasswordError(false);
      setConfirmPasswordError(false);
    }
  };

  return (
    <div className={'register_main'}>
      <img src='src/Pages/Images/Background1.png' className={'register_bg'} />
      {/* Alerta de éxito de registro */}
      {registrationSuccess && (
        <div className={'registration-success-alert'}>
          <p>Registro exitoso. Serás redirigido a la página de inicio de sesión enseguida!!!.</p>
        </div>
      )}     
      <div className={'register_form_container'}>
        <h2>Registro de Usuario</h2>
        <form onSubmit={handleSubmit} className={'register_form'}>
          <div className={'register_user'}>
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
          <div className={'register_user'}>
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
          <div className={'register_user'}>
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
          <div className={'register_usertype'}>
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
          <div className={'register_password'}>
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
            {errorMessage && <div className="register_error-message">{errorMessage}</div>}
          </div>
          <div className={'register_form_end'}>
            <div className={'register_texto'}>
              <p>¿Ya tienes una cuenta? <br></br><NavLink to={'/'}>Inicia sesión.</NavLink></p>
            </div>
            <div className={'register_aceptar'}>
              <button type='submit' className={isButtonDisabled ? 'disabled' : ''} disabled={isButtonDisabled}>Registrarse</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;