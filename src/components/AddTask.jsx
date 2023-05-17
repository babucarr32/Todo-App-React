import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";

function AddTask() {
  return (
    <div className="addTask h-70vh w-70vh bg-white absolute z-10 shadow-2xl p-3 rounded-2xl">
      <Input />
      <br />
      <br />
      <TextArea />
    </div>
  );
}

export default AddTask;
