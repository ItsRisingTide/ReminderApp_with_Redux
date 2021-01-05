import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "./todoSlice";
import s from "./styles/Todo.module.css";

const Todo = ({ text, color, id, completed }) => {
  //this dubious thing i have to do because changing css propeties
  //don't work well with scss modules

  const labelColorStyles = {
    green: `${s.label_green}`,
    blue: `${s.label_blue}`,
    purple: `${s.label_purple}`,
  };

  const dispatch = useDispatch();
  return (
    <>
      <div className={s.container}>
        <div className={labelColorStyles[color]}></div>
        <div
          className={s.content}
          onClick={() => dispatch(toggleTodo(id))}
          style={{
            textDecoration: completed ? "line-through" : "none",
          }}
        >
          {text}
        </div>
      </div>
    </>
  );
};

export default Todo;
