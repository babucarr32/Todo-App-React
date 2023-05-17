import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Title from "./Title";
import Button from "./Button";

function AddTask() {
  const handleCreateTodo = (e) => {
    e.preventDefault();
    const time = e.target.time.value;
    const title = e.target.title.value;
    const comment = e.target.comment.value;

    console.log(time, title, comment);
  };

  return (
    <div className="addTask w-70vh bg-white absolute z-10 shadow-2xl p-3 rounded-2xl">
      <form action="" onSubmit={handleCreateTodo}>
        <Title />
        <Input placeholder={"Time: 09:30 AM"} name={"time"} />
        <Input placeholder={"Title"} name={"title"} />
        <TextArea name={"comment"} />
        <Button btnContent={"Create"} />
      </form>
    </div>
  );
}

export default AddTask;
