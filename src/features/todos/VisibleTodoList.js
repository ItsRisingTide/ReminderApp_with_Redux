import React from 'react'
//comp
import Todo from "./Todo"
import TodoList from "./TodoList"
//
import { useSelector, useDispatch } from "react-redux"
import { createSelector } from "@reduxjs/toolkit"
import { VisibilityFilters } from "../filters/filtersSlice"
import { toggleTodo } from './todoSlice'


const VisibleTodoList = () => {

    const dispatch = useDispatch()

    const todo = useSelector(state => state.todo)
    const filter = useSelector(state => state.filters)

    const selectTodo = state => state.todo
    const selectFilter = state => state.filters

    const selectVisibleTodos = createSelector(
        [selectTodo, selectFilter],
        (todos, filter) => {
            switch (filter) {
                case VisibilityFilters.SHOW_ALL:
                    return todos
                case VisibilityFilters.SHOW_COMPLETED:
                    return todos.filter((todo) => todo.completed)
                case VisibilityFilters.SHOW_ACTIVE:
                    return todos.filter((todo) => !todo.completed)
                default:
                    throw new Error('Unknown filter: ' + filter)
            }
        }
    )

    const filteredTodos = useSelector(selectVisibleTodos)

    return (
        <>
            <div className="s">Filtered</div>
            <TodoList todos={filteredTodos} />
            {/* <div className="s">Initial</div>
            {todo.map(todo => (
                <Todo key={todo.id} {...todo} onClick={() => dispatch(toggleTodo(todo.id))} />
            ))} */}
            <div className="s">Current filter : {filter}</div>

        </>
    )
}

export default VisibleTodoList;