import React, { useContext } from "react";
import { ThemeContext } from "./Homepage";

function Input({ placeholder, name, value }) {
  const { updateTitle } = useContext(ThemeContext);
  return (
    <>
      <input
        value={updateTitle}
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
