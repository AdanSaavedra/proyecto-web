import { useContext } from "react";
import "./DetalleSolicitud.css";
import { IoCloseCircle } from "react-icons/io5";
import { CardContext } from "../../CardContext";

const DetalleSolicitud = () => {
  const context = useContext(CardContext);
  return (
    <div className="detalleCard">
      <h1 className="title">Detalle de Solicitud</h1>
      <section className="infoSection">
        <div className="motivoCard">
          <p className="nombrecard">
            {context.modalData.nombre}
          </p>
          <p>
            <span className="cardTags">Motivo: </span>
            {context.modalData.desc}
          </p>
          <p>
            <span className="cardTags">Estatus actual:</span>{" "}
            {context.modalData.stat}
          </p>
        </div>
        <div>
          <p className="fechas">Fechas</p>
          <p>
            <span className="cardTags">Inicio:</span> {context.modalData.inicio}
          </p>
          <p>
            <span className="cardTags">Final:</span> {context.modalData.fin}
          </p>
        </div>
        <div className="detalle">
          <p>
            <span className="cardTags">Detalle:</span>{" "}
            {context.modalData.motivo}
          </p>
        </div>
        <span className="btnClose" onClick={() => context.handleModal()}>
          <IoCloseCircle />
        </span>
      </section>
    </div>
  );
};

export default DetalleSolicitud;
