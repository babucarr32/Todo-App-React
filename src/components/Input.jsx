import React from "react";

function Input({ placeholder, name }) {
  return (
    <>
      <input
        className="w-100 h-10"
        type="text"
        placeholder={placeholder}
        name={name}
      />
      <br />
      <br />
    </>
  );
}

export default Input;
