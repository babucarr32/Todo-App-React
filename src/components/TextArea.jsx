import React from "react";

function TextArea({ name }) {
  return (
    <>
      <textarea
        className="w-100 h-52"
        name={name}
        id=""
        placeholder="Comments..."
      ></textarea>

      <br />
      <br />
    </>
  );
}

export default TextArea;
