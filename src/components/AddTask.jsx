import React, { useEffect, useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Title from "./Title";
import Button from "./Button";

function AddTask() {
  const [getTodoData, setGetTodoData] = useState([]);
  const [todoData, setTodoData] = useState([]);
  const [submitForm, setSubmitForm] = useState(true);

  useEffect(() => {
    const getLocalStorage = localStorage.getItem("TODO");
    setGetTodoData([getLocalStorage]);
  }, [submitForm]);

  getTodoData.map((data) => {
    console.log(data);
  });

  const handleCreateTodo = (e) => {
    setSubmitForm(!submitForm);
    e.preventDefault();
    const time = e.target.time.value;
    const title = e.target.title.value;
    const comment = e.target.comment.value;

    const getLocalStorage = localStorage.getItem("TODO");
    let LSData = [
      {
        time,
        title,
        comment,
      },
    ];
    let addToLSData;
    if (getLocalStorage !== null) {
      LSData = [...JSON.parse(getLocalStorage), ...LSData];
      console.log("___", LSData);
    }
    localStorage.setItem("TODO", JSON.stringify(LSData));
    console.log(time, title, comment);
  };

  return (
    <div className="addTask w-70vh bg-white absolute z-10 shadow-2xl p-3 rounded-2xl">
      <form action="" onSubmit={(e) => handleCreateTodo(e)}>
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
