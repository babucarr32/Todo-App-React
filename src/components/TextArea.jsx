import React from "react";

function TextArea({ initName }) {
  return (
    <>
      <textarea
        className="w-100 h-52"
        name={initName}
        id=""
        placeholder="Comments..."
      ></textarea>

      <br />
      <br />
    </>
  );
}

export default TextArea;
