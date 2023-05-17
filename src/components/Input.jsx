import React from "react";

function Input({ placeholder }) {
  return (
    <>
      <input className="w-100 h-10" type="text" placeholder={placeholder} />;
      <br />
      <br />
    </>
  );
}

export default Input;
