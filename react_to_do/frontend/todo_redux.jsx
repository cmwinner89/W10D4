import React from 'react';
import ReactDOM from 'react-dom';
import {receiveTodo, receiveTodos, removeTodo} from './actions/todo_actions'
import configureStore from './store/store'


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root");
    const test = <h1>This is our test</h1>
    ReactDOM.render(test, root)
    const store = configureStore();
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.removeTodo = removeTodo;
    window.receiveTodos = receiveTodos;
})
