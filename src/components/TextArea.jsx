import React from "react";

function TextArea({ comment }) {
  return (
    <textarea
      className="w-100 h-52"
      name={comment}
      id=""
      placeholder="Comments..."
    ></textarea>
  );
}

export default TextArea;
