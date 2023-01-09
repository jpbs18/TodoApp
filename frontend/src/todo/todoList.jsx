import React from "react"
import Button from "../template/iconButton"

export default props => {

    const list = props.list || []
    
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Description</th>
                    <th className="tableActions">Actions</th>
                </tr>
            </thead>

            <tbody>
                {list.map(todo => {
                    return <tr key={todo._id}>
                              <td className={todo.done ? "done" : ""}>{todo.description}</td>
                              <td>
                                <Button style="success" icon="check" onClick={() => props.handleDone(todo)} hide={todo.done}/>
                                <Button style="warning" icon="undo" onClick={() => props.handlePending(todo)} hide={!todo.done}/>
                                <Button style="danger" icon="trash-o" onClick={() => props.handleRemove(todo._id)} hide={!todo.done}/>
                              </td>
                           </tr>
                })}
            </tbody>
        </table>
    )
}