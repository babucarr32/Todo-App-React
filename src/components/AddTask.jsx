import React, { useContext, useEffect, useState, useRef } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Title from "./Title";
import Button from "./Button";
import { ThemeContext } from "./Homepage";

function AddTask() {
  const {
    fontColor,
    secondBgColor,
    getPropId,
    updateTitle,
    updateTime,
    updateTask,
    addTask,
    setAddTask,
    setUpdateTask,
  } = useContext(ThemeContext);

  const titleRef = useRef();
  const timeRef = useRef();

  const [submitForm, setSubmitForm] = useState(true);

  const [getTodoData, setGetTodoData] = useState([]);

  useEffect(() => {
    titleRef.current.value = updateTitle;
    timeRef.current.value = updateTime;
  }, [updateTask]);

  const handleCreateTodo = (e) => {
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
    // Update the LS if not null
    if (getLocalStorage !== null) {
      const LSLength = JSON.parse(getLocalStorage).length;
      const updateID = {
        ...LSData[0],
        id: JSON.parse(getLocalStorage)[LSLength - 1].id + 1,
      };
      LSData = [...JSON.parse(getLocalStorage), updateID];
    }
    localStorage.setItem("TODO", JSON.stringify(LSData));

    setAddTask(!addTask);
    setUpdateTask(false);
  };

  // Init the LS with data
  useEffect(() => {
    const getLocalStorage = localStorage.getItem("TODO");
    if (getLocalStorage !== null) {
      setGetTodoData([...JSON.parse(getLocalStorage)]);
    }
  }, []);

  const handleUpdateTodo = (e) => {
    e.preventDefault();
    const todoTitle = titleRef.current.value;
    const todoTime = timeRef.current.value;
    const updateTodo = getTodoData.map((todo) => {
      if (todo.id === getPropId) {
        return { ...todo, title: todoTitle, time: todoTime };
      } else {
        return { ...todo };
      }
    });
    localStorage.setItem("TODO", JSON.stringify(updateTodo));
    setUpdateTask(false);
    setAddTask(!addTask);
  };

  const handleDiscardForm = (e) => {
    e.preventDefault();
    setUpdateTask(!updateTask);
    setAddTask(!addTask);
  };
  return (
    <div
      className={`addTask w-70vh ${secondBgColor} absolute z-10 shadow-2xl shadow-black p-3 rounded-2xl`}
    >
      <form
        action=""
        onSubmit={
          submitForm ? (e) => handleCreateTodo(e) : (e) => handleUpdateTodo(e)
        }
      >
        <Title fontColor={fontColor} />
        <Input
          initPlaceholder={"Time: 09:30 AM"}
          initName={"time"}
          refs={timeRef}
        />
        <Input initPlaceholder={"Title"} initName={"title"} refs={titleRef} />
        <TextArea initName={"comment"} />
        {updateTask ? (
          <>
            <Button
              btnContent={"Update"}
              bg={true}
              buttonClick={() => setSubmitForm(false)}
            />

            <Button
              btnContent={"Discard"}
              bg={true}
              buttonClick={(e) => handleDiscardForm(e)}
              type={"button"}
            />
          </>
        ) : (
          <Button
            btnContent={"Create"}
            bg={true}
            buttonClick={() => setSubmitForm(true)}
          />
        )}
      </form>
    </div>
  );
}

export default AddTask;
