import React, {useState} from 'react'
import TodoForm from '../components/TodoForm'
import TodoDash from '../components/TodoDash'

const TodoList = () => {
    const [list, setList] = useState([])
    const newItem = (newItem) => {
        setList([...list, newItem])
    }
    return (
        <div>
            <h1>Todo List</h1>
            <TodoForm onNewItem ={newItem}/>
            <TodoDash list = {list}/>
        </div>
    )
}

export default TodoList