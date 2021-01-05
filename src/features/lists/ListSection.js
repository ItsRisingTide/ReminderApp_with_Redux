import { useSelector } from "react-redux";
import s from "./styles/ListSection.module.css";
import List from "./List";

const ListSection = ({ currentList, setCurrentList }) => {
  const lists = useSelector((state) => state.lists);
  console.log(lists);

  return (
    <div className={s.container}>
      <div className={s.title}>Your lists:</div>
      {lists.map((list) => (
        <List
          key={list.id}
          currentList={currentList}
          setCurrentList={setCurrentList}
          {...list}
        />
      ))}
    </div>
  );
};

export default ListSection;
