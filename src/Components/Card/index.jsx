import PropTypes from "prop-types"; // Import prop-types
import { FcCalendar } from "react-icons/fc";
import "./card.css";
import Status from "../buttons/Status/index.jsx";
import { useContext } from "react";
import { CardContext } from "../../CardContext/index.jsx";

const Card = ({ cosas }) => {
  const context = useContext(CardContext);

  const { inicio, final, descripcion, motivo, status } = cosas;

  return (
    <div
      onClick={() => {
        context.handleModal();
        context.ModalData(inicio, final, motivo, descripcion, status);
      }}
      className="card"
    >
      <div>
        <p className="info" id="motivo">
          <b>{descripcion}</b>
        </p>
        <p className="info date">
          <b>Inicio:</b> {inicio}
        </p>
        <p className="info date">
          <b>Final:</b> {final}
        </p>
        <p className="info" id="desc">
          <b>Descripcion:</b> {motivo}
        </p>
      </div>
      <div>
        <FcCalendar className="icon" />
        <div className={"status-cont"}>
          <Status className="status" prop={status} />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  cosas: PropTypes.shape({
    inicio: PropTypes.string.isRequired,
    final: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    motivo: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
