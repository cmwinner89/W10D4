import React from 'react';
import {allTodos} from '../../reducers/selector';

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <ul>
                    {this.props.todos.map((todo) => {
                        return(<li key={todo.id}>
                            {todo.title}
                        </li>
                    )})}
                </ul>
            </div>
        )
    };
};

export default TodoList;