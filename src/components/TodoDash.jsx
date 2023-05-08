import React from 'react'

const TodoDash = (props) => {
    return (
        <div>
            <table>
                <thead>
                    <th>List</th>
                </thead>
                <tbody>
                    {
                        props.list.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{item}</td>
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