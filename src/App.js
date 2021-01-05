import React, { useState } from "react";

//components
import AddTodo from "./features/todos/AddTodo";
import VisibleTodoList from "./features/todos/VisibleTodoList";
import Footer from "./features/filters/Footer";

import AddList from "./features/lists/AddList";
import ListSection from "./features/lists/ListSection";

//styles
import "./App.css";

const App = () => {
  const [currentList, setCurrentList] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <div className="app_title">Reminders</div>
        <div className="app">
          <div className="app_left">
            <ListSection
              currentList={currentList}
              setCurrentList={setCurrentList}
            />
            <AddList />
          </div>
          <div className="app_right">
            <AddTodo currentList={currentList} />
            <VisibleTodoList currentList={currentList} />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
