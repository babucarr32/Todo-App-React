import React, { useContext, useState } from "react";
import { ThemeContext } from "./Homepage";

function Input({ value, initPlaceholder, initName }) {
  const { placeholder, name, updateTitle, updateTime, setUpdateTitle } =
    useContext(ThemeContext);
  return (
    <>
      <input
        value={value ? value : updateTime ? updateTime : updateTitle}
        className="w-100 h-10"
        type="text"
        placeholder={initPlaceholder ? initPlaceholder : placeholder}
        name={initName ? initName : name}
        onChange={(e) => setUpdateTitle(e.target.value)}
      />
      <br />
      <br />
    </>
  );
}

export default Input;
