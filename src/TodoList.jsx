import React, { Component } from 'react';
import Todo from './Todo';
import AddNewTodo from './AddNewTodo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { task: 'Read some books', id: 1 },
                { task: 'Eat some fruits', id: 2 },
                { task: 'Clean the room', id: 3 }
            ]
        };
    }

    createTodo = (newTodo) => {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    render() {
        const todos = this.state.todos
        return (
            <div>
                <AddNewTodo createTodo={this.createTodo} />

                <h1>Todo List!</h1>
                {
                    todos.map(todo => (
                        <Todo todo={todo} key={todo.id} />
                    ))
                }
            </div>
        )
    }
}

export default TodoList;
