import React, { useContext, useState, useEffect } from "react";
import CheckBox from "./CheckBox";
import Icon from "./Icon";
import { ThemeContext } from "./Homepage";

function SideCard() {
  const [getTodoData, setGetTodoData] = useState([]);
  const { addTask, setAddTask, rerender } = useContext(ThemeContext);

  useEffect(() => {
    const getLocalStorage = localStorage.getItem("TODO");
    if (getLocalStorage !== null) {
      setGetTodoData([...JSON.parse(getLocalStorage)]);
    }
  }, [addTask, rerender]);

  const handleAddTaskFunc = () => {
    setAddTask(!addTask);
  };

  return (
    <>
      <div
        className={`flex flex-col p-3 rounded-xl bg-gray mb-3 h-70vh overflow-scroll`}
      >
        <div className="flex justify-between items-center">
          <h3 className={`text-pink-200`}>This week</h3>
          <p className="text-white">-</p>
        </div>
        {getTodoData.map((todo, index) => (
          <CheckBox
            key={index}
            text={todo.title}
            todoID={todo.id}
            setGetTodoData={setGetTodoData}
            getTodoData={getTodoData}
          />
        ))}
        <div className="w-100 flex justify-end">
          <Icon
            src="/assets/icons/plus.svg"
            width={"w-5"}
            height={"h-5"}
            handleClick={handleAddTaskFunc}
          />
        </div>
      </div>
    </>
  );
}

export default SideCard;
