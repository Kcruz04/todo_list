import React, { useState } from 'react'

const TodoForm = (props) => {
    const [item, setItem] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const newItem = {item}
        props.onNewItem(newItem)
    }

    return (
        <div>
            <fieldset><h1>Todo Form</h1></fieldset>
            <form onSubmit={handleSubmit}>
            <label>Item</label>
            <input type="text" value={item} onChange={(e) => setItem(e.target.value)}/>
            <button type="submit" class="btn btn-primary">Submit</button> 
            </form>
            
        </div>
    )
}

export default TodoForm