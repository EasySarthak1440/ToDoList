import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3>Todos List</h3>
        {/* {props.Todos} */}
        <TodoItem todo={props.Todos[0]}/>
    </div>
  )
}
