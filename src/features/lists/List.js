import React from "react";
import s from "./styles/List.module.css";

import { ReactComponent as Logo } from "../../img/add_icon3.svg";
import { deleteList } from "./listSlice";
import { useDispatch } from "react-redux";

const List = ({ name, todos_id, currentList, setCurrentList, id }) => {
  const dispatch = useDispatch();
  const isActive = id === currentList;
  console.log(`${name} : ${isActive}`);
  return (
    <div className={isActive ? s.list_item_active : s.list_item}>
      <div
        className={isActive ? s.container_active : s.container}
        onClick={() => setCurrentList(id)}
      >
        <div className={isActive ? s.text_underline : s.text}>{name}</div>
      </div>
      <Logo
        class={isActive ? s.delete_icon_active : s.delete_icon}
        onClick={() => dispatch(deleteList(id))}
      />
    </div>
  );
};

export default List;
