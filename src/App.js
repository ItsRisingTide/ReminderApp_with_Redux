import React from 'react'

//components
import AddTodo from "./features/todos/AddTodo"
import VisibleTodoList from "./features/todos/VisibleTodoList"
import Footer from "./features/filters/Footer"

//redux
import { increment, decrement } from "./features/counter/counterSlice"
import { useSelector, useDispatch } from "react-redux"

const App = () => {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const customIncrement = async () => {
    setTimeout(() => { dispatch({ type: increment }) }, 1000)
  }


  return (
    <>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
      <div className="s">Counter: {counter}</div>
      <button onClick={() => dispatch({ type: increment })}>increment</button>
      <button onClick={() => dispatch({ type: decrement })}>decrement</button>
      <button onClick={customIncrement}>async increment</button>
    </>
  );
}

export default App;
