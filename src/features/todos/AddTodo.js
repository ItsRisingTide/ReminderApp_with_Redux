import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'


const AddTodo = () => {

    const [todoText, setTodoText] = useState([])

    const onChange = e => setTodoText(e.target.value)

    const dispatch = useDispatch()

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                if (!todoText.trim())
                    return;
                // console.log(todoText)
                dispatch(addTodo(todoText))
                setTodoText("")
            }
            }>
                <input value={todoText} onChange={onChange} type="text" />
                <button type="submit">Add todo</button>
            </form>
        </div>
    )
}

export default AddTodo;