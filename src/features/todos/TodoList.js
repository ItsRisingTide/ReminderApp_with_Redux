import React from 'react'
import Todo from "./Todo"
import s from "./styles/TodoList.module.css"

//Component for checking types of Todos before 
//doing anything with it 

import propTypes from "prop-types"

const TodoList = ({ todos }) => {
    return (

        <div className={s.container}>
            <div className={s.content}>
                <ul>
                    {todos.map(todo => (
                        <Todo key={todo.id} {...todo} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

TodoList.propTypes = {
    todos: propTypes.arrayOf(
        propTypes.shape({
            text: propTypes.string.isRequired,
            color: propTypes.string.isRequired,
            id: propTypes.number.isRequired,
            completed: propTypes.bool.isRequired,
        }).isRequired
    ).isRequired
}

export default TodoList