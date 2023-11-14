import "./button.css";
import PropTypes from "prop-types";
import React from 'react';

const Butt = ({ prop, newclass, value, click }) => {
  const handleClick = () => {
    click(value);
  };

  return (
    <button className={`button ${newclass}`} onClick={handleClick}>
      {prop}
    </button>
  );
};

Butt.propTypes = {
  prop: PropTypes.string.isRequired,
  newclass: PropTypes.string,
  onClick: PropTypes.func, // Add the onClick prop
};

export default Butt;
