import React, { useContext, useEffect, useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Title from "./Title";
import Button from "./Button";
import { ThemeContext } from "./Homepage";

function AddTask() {
  const { updateTitle, updateTime, setUpdateTitle, defaultTitle } =
    useContext(ThemeContext);

  const [getTodoData, setGetTodoData] = useState([]);
  const [submitForm, setSubmitForm] = useState(true);

  useEffect(() => {
    const getLocalStorage = localStorage.getItem("TODO");
    if (getLocalStorage !== null) {
      setGetTodoData([...JSON.parse(getLocalStorage)]);
    }
  }, [submitForm]);

  const handleCreateTodo = (e) => {
    setSubmitForm(!submitForm);
    e.preventDefault();
    const time = e.target.time.value;
    const title = e.target.title.value;
    const comment = e.target.comment.value;

    const getLocalStorage = localStorage.getItem("TODO");
    let LSData = [
      {
        id: 0,
        time,
        title,
        comment,
      },
    ];
    if (getLocalStorage !== null) {
      const LSLength = JSON.parse(getLocalStorage).length;
      console.log(LSLength);
      const updateID = {
        ...LSData[0],
        id: JSON.parse(getLocalStorage)[LSLength - 1].id + 1,
      };
      LSData = [...JSON.parse(getLocalStorage), updateID];
    }
    localStorage.setItem("TODO", JSON.stringify(LSData));
  };

  return (
    <div className="addTask w-70vh bg-white absolute z-10 shadow-2xl p-3 rounded-2xl">
      <form action="" onSubmit={(e) => handleCreateTodo(e)}>
        <Title />
        <Input
          initPlaceholder={"Time: 09:30 AM"}
          initName={"time"}
          value={updateTitle}
        />
        <Input initPlaceholder={"Title"} name={"title"} value={updateTime} />
        <TextArea initName={"comment"} />
        <Button btnContent={"Create"} bg={true} />
      </form>
    </div>
  );
}

export default AddTask;
