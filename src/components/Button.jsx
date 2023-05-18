import React from "react";

function Button({ btnContent, bg, buttonClick, type }) {
  return (
    <button
      type={type}
      onClick={buttonClick}
      className={
        bg &&
        "bg-cyan-400 pt-3 pb-3 pr-5 pl-5 text-black text-center rounded-lg font-bold"
      }
    >
      {btnContent}
    </button>
  );
}

export default Button;
