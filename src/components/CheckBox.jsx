import React, { useRef, useState, useContext, useEffect } from "react";
import Icon from "./Icon";
import Button from "./Button";
import { ThemeContext } from "./Homepage";

function CheckBox({ text, todoID, getTodoData, setGetTodoData }) {
  const {
    setUpdateTitle,
    setUpdateTime,
    addTask,
    setAddTask,
    setUpdateTask,
    updateTask,
    setGetPropId,
    getPropId,
    rerender,
    setRerender,
    getTodoChart,
    seGetTodoChart,
  } = useContext(ThemeContext);

  const checkBoxRef = useRef();

  let color = "white";

  useEffect(() => {
    const getLocalStorage = localStorage.getItem("TODO");
    if (getLocalStorage !== null) {
      setGetTodoData([...JSON.parse(getLocalStorage)]);
    }
  }, [addTask]);
  todoID;

  const handleCheckBoxClick = (todoID) => {
    const delTodo = getTodoData.filter((todo) => todo.id !== todoID);
    localStorage.setItem("TODO", JSON.stringify(delTodo));
    setGetTodoData(delTodo);
    seGetTodoChart(delTodo);
    setRerender(!rerender);
  };

  const handleEditTodo = (todoID) => {
    const findTodoToUpdate = getTodoData.find((todo) => todo.id == todoID);
    setGetPropId(todoID);

    setAddTask(!addTask);
    setUpdateTask(!updateTask);
    setUpdateTitle(findTodoToUpdate.title);
    setUpdateTime(findTodoToUpdate.time);
  };
  return (
    <div className={`flex text-white items-center`}>
      <Icon
        src={"/assets/icons/bin.svg"}
        width={"h-4"}
        height={"h-4"}
        handleClick={() => handleCheckBoxClick(todoID)}
        refs={checkBoxRef}
      />
      <div className="flex justify-between w-100 items-center">
        <p className={`text-${color}`}>{text}</p>
        <Button
          btnContent={"edit"}
          buttonClick={() => handleEditTodo(todoID)}
        />
      </div>
    </div>
  );
}

export default CheckBox;
