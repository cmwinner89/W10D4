import React from 'react';
import { receiveTodos } from '../../actions/todo_actions';
import {allTodos} from '../../reducers/selector';
import TodoForm from './todo_form';
import {TodoListItem} from './todo_list_item';

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <ul>
                    {this.props.todos.map((todo) => {
                        return(<TodoListItem todo={todo} />
                    )})};
                </ul>

                <TodoForm receiveTodo={this.props.receiveTodo}/>
            </div>
        )
    };
};

export default TodoList;