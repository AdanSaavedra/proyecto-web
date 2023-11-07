import "./enEspera.css";
import PropTypes from "prop-types";

const Espera = ({ newclass }) => {
  return (
    <div className={`espera ${newclass}`}>
      <h1>En espera</h1>
    </div>
  );
};

Espera.propTypes = {
  newclass: PropTypes.string.isRequired,
};

export default Espera;
