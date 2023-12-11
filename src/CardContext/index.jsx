import React from "react";
import { createContext, useContext, useState } from "react";

const CardContext = React.createContext();

function CardProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [historial, setHistorial] = useState([]);
  const handleModal = () => {
    setOpenModal((element) => !element);
  };
  const ModalData = (id, inicio, fin, motivo, descripcion, estado, nombre) => {
    setModalData({
      id: id,
      inicio: inicio,
      fin: fin,
      motivo: motivo,
      desc: descripcion,
      stat: estado,
      nombre: nombre,
    });
  };
  const clearSuccessMessage = () => {
    setSuccessMessage("");
  };
  return (
    <CardContext.Provider
      value={{
        openModal,
        setOpenModal,
        handleModal,
        modalData,
        ModalData,
        historial,
        setHistorial,
      }}
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
  const [type, setType] = useState(null);

  const login = (id, namme, type) => {
    setUserId(id);
    setUsername(namme);
    setType(type);
  };

  const logout = () => {
    setUserId(null);
    setUsername(null);
  };

  return (
    <UserContext.Provider value={{ userId, login, logout, userName, type }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
export { UserContext, useUser, UserProvider };
