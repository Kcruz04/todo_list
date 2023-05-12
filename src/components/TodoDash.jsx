import React from 'react'



const TodoDash = (props) => {
    const completed = (e,i) =>{
        props.onCompleted(e.target.checked, i)
    }
    // const remove = (e, i) => {
    //     props.onremove(e.target, i)
    // }
    return (
        <div>
            <table className='table'>
                <thead>
                    <th>List</th>
                    <th>Completed</th>
                </thead>
                <tbody>
                    {
                        props.list.map((items, i) => {
                            return (
                                <tr key={i} style={items.completed ? {textDecorationLine: 'line-through'} : {}} >
                                    <td>{items.item}</td>
                                    <td><input type="checkbox" checked={items.i} onChange={(e) =>{completed(e,i)}} /></td>
                                    <button onClick={() =>{props.onremove(i)}} className="btn btn-dark">Delete</button>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default TodoDash