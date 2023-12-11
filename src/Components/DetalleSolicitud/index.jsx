import { useContext } from "react";
import "./DetalleSolicitud.css";
import { IoCloseCircle } from "react-icons/io5";
import { CardContext } from "../../CardContext";
import { useUser } from "../../CardContext";

const DetalleSolicitud = () => {
  const context = useContext(CardContext);
  const { type } = useUser();
  const actualizarEstado = (nuevoEstado, idSolicitud) => {
    fetch(
      `http://localhost:80/backend/actualizar_estado.php?nuevo_estado=${nuevoEstado}&id_solicitud=${idSolicitud}`
    )
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // Maneja la respuesta del servidor como desees
        // Actualiza tu estado local o realiza acciones adicionales si es necesario
        context.setSuccessMessage("Estado actualizado con éxito");
        context.handleModal(); // Cierra el modal
      })
      .catch((error) => {
        console.error("Error al actualizar el estado:", error);
      });
  };
  return type === "1" ? (
    <>
      <div className="detalleCard">
        <h1 className="title">Detalle de Solicitud</h1>
        <section className="infoSection">
          <div className="motivoCard">
            <p className="nombrecard">{context.modalData.nombre}</p>
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
              <span className="cardTags">Inicio:</span>{" "}
              {context.modalData.inicio}
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
    </>
  ) : (
    <>
      <div className="detalleCard">
        <h1 className="title">Detalle de Solicitud</h1>
        <section className="infoSection">
          <div className="motivoCard">
            <p className="nombrecard">{context.modalData.nombre}</p>
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
              <span className="cardTags">Inicio:</span>{" "}
              {context.modalData.inicio}
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
            <button
              onClick={() => {
                actualizarEstado(2, context.modalData.id);
                context.handleModal();
              }}
            >
              Aceptar
            </button>
            <button
              onClick={() => {
                actualizarEstado(0, context.modalData.id);
                context.handleModal();
              }}
            >
              Rechazar
            </button>
          </div>
          <span className="btnClose" onClick={() => context.handleModal()}>
            <IoCloseCircle />
          </span>
        </section>
      </div>
    </>
  );
};

export default DetalleSolicitud;
