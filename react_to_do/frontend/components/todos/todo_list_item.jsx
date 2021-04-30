import React from 'react';


export const TodoListItem = (props) => {
    debugger
    return (
        <li key={props.todo.id}>{props.todo.title}</li>
    )
}               