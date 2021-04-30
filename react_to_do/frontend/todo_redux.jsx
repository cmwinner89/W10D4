import React from 'react';
import ReactDOM from 'react-dom';
import {receiveTodo, receiveTodos, removeTodo} from './actions/todo_actions';
import {receiveStep, receiveSteps, removeStep} from './actions/step_actions';
import configureStore from './store/store';
import Root from './components/root';
import {allTodos} from './reducers/selector';


document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById("content");
    // const test = <h1>This is our test</h1>
    const store = configureStore();

    ReactDOM.render(<Root store={store}/>, content)
    

    window.store = store;

    window.receiveTodo = receiveTodo;
    window.removeTodo = removeTodo;
    window.receiveTodos = receiveTodos;

    window.receiveStep = receiveStep;
    window.receiveSteps = receiveSteps;
    window.removeStep = removeStep;

    window.allTodos = allTodos;
})
