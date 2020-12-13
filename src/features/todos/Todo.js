import React from 'react'
import { useDispatch } from "react-redux"
import { toggleTodo } from "./todoSlice"

const Todo = ({ text, id, completed }) => {

    const dispatch = useDispatch()

    return (
        <>
            <div >
                <div
                    className="s"
                    onClick={() => dispatch(toggleTodo(id))}
                    style={{
                        textDecoration: completed ? 'line-through' : 'none'
                    }}>
                    {text}
                </div>
                <div className="s">ID: {id}</div>
            </div>
        </>
    )
}

export default Todo;

