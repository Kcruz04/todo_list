import React, {useState} from 'react'
import TodoForm from '../components/TodoForm'
import TodoDash from '../components/TodoDash'

const TodoList = () => {
    
    const [list, setList] = useState([])
    const newItem = (newItem) => {
        setList([...list, newItem])
    }

    const complete = (completed,i) =>{
        const checked = [...list]
        checked [i].item = completed;
        setList(checked)
    }

    return (
        <div>
            <h1>Todo List</h1>
            <TodoForm onNewItem ={newItem}/>
            <TodoDash list = {list} onCompleted={complete}/>
        </div>
    )
}

export default TodoList