import PropTypes from "prop-types"; // Import prop-types

import "./card.css";

const Card = ({ cosas }) => {
  const { inicio, final, descripcion, motivo} = cosas;

  return (
    <div className="card">
        <p>Motivo: {descripcion}</p>
        <p>Inicio: {inicio}</p>
        <p>Final:  {final}</p>
        <p>Descripcion: {motivo}</p>
    </div>
  );
}

Card.propTypes = {
  cosas: PropTypes.shape({
    inicio: PropTypes.string.isRequired,
    final: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    motivo: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
