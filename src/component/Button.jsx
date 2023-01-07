import React from "react";

const Button = ({ icon, text, bgButton }) => {
  return (
    <button className={bgButton}>
      <img src={icon} alt='button-icons' />
      {text}
    </button>
  );
};

export default Button;
