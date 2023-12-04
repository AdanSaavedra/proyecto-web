import React from "react";
import { createContext, useContext, useState } from "react";

const CardContext = React.createContext();

function CardProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const handleModal = () => {
    setOpenModal((element) => !element);
  };
  const ModalData = (inicio, fin, motivo, descripcion, estado, nombre) => {
    setModalData({
      inicio: inicio,
      fin: fin,
      motivo: motivo,
      desc: descripcion,
      stat: estado,
      nombre: nombre,
    });
  };
  return (
    <CardContext.Provider
      value={{ openModal, setOpenModal, handleModal, modalData, ModalData }}
    >
      {children}
    </CardContext.Provider>
  );
}

export { CardContext, CardProvider };
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [userName, setUsername] = useState(null);

  const login = (id, namme) => {
    setUserId(id);
    setUsername(namme);
  };

  const logout = () => {
    setUserId(null);
    setUsername(null);
  };

  return (
    <UserContext.Provider value={{ userId, login, logout, userName }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
export { UserContext, useUser, UserProvider };