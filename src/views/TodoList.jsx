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
        checked[i].completed = completed;
        setList(checked)
        console.log(list)
    }
    const remove = (i) =>  {
        const deleted = list.filter((item,index) => index !==i)
        setList(deleted);
        console.log(list)
    }

    return (
        <div>
            <h1>Todo List</h1>
            <TodoForm onNewItem ={newItem}/>
            <TodoDash list = {list} onCompleted={complete} onremove = {remove}/>
        </div>
    )
}

export default TodoList