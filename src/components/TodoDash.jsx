import React from 'react'

const TodoDash = (props) => {
    return (
        <div>
            <table>
                <thead>
                    <th>List</th>
                    <th>Completed</th>
                </thead>
                <tbody>
                    {
                        props.list.map((items, i) => {
                            return (
                                <tr key={i}>
                                    <td>{items.item}</td>
                                    <td><input type="checkbox" checked={items.item}  /></td>
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