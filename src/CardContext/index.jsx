import React from "react";
import { useState } from "react";

const CardContext = React.createContext();

function CardProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const handleModal = () => {
    setOpenModal((element) => !element);
  };
  const ModalData = (inicio, fin, motivo, descripcion, estado) => {
    setModalData({
      inicio: inicio,
      fin: fin,
      motivo: motivo,
      desc: descripcion,
      stat: estado,
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
