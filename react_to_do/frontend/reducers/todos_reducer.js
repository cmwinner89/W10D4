import {RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO} from '../actions/todo_actions';

const initialState = {
    1: {
      id: 1,
      title: "wash car",
      body: "with soap",
      done: false
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      done: true
    }
  };

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_TODOS: 
            const newerState = {};
            action.todos.forEach((todo) => {
                newerState[todo.id] = todo;
            });
            return newerState;
        case RECEIVE_TODO:
            return nextState[action.todo.id] = action.todo;
        case REMOVE_TODO: 
            let arr = Object.entries(nextState);
            let newArr = arr.map(item => item !== action.todo.id);
            let newestState = Object.create(newArr);
            return newestState;
        default:
            return state;
    }
};

export default todosReducer;