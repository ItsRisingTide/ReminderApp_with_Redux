import React from 'react'
import Todo from "./Todo"

//Component for checking types of Todos before 
//doing anything with it 

import propTypes from "prop-types"

const TodoList = ({ todos }) => {
    return (
        <>
            <ul>
                {todos.map(todo => (
                    <Todo key={todo.id} {...todo} />
                ))}
            </ul>
        </>
    )
}

TodoList.propTypes = {
    todos: propTypes.arrayOf(
        propTypes.shape({
            text: propTypes.string.isRequired,
            id: propTypes.number.isRequired,
            completed: propTypes.bool.isRequired,
        }).isRequired
    ).isRequired
}

export default TodoList