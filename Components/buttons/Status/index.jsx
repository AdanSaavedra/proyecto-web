import "./status.css";
import PropTypes from "prop-types";

const Status = ({ prop }) => {
  return (
    <div className="status">
      <h1>{prop}</h1>
    </div>
  );
};

Status.propTypes = {
  prop: PropTypes.string.isRequired,
};

export default Status;
