import React from "react";
import "./style/Button.css";

const Button = ({ touche, classe, onClick }) => {
  const selectNb = () => {
    onClick(touche);
  };

  return (
    <div>
      <button className={classe} onClick={selectNb}>
        {touche}
      </button>
    </div>
  );
};

export default Button;
