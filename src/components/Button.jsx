import React from "react";

function Button({ btnContent, bg }) {
  return (
    <button
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
