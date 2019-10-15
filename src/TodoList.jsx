import React, { Component } from 'react';
import Todo from './Todo';
import AddNewTodo from './AddNewTodo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [

            ]
        };
    }

    handleRemove = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
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
                        <Todo removeTodo={() => { this.handleRemove(todo.id) }} id={todo.id} todo={todo} key={todo.id} />
                    ))
                }
            </div>
        )
    }
}

export default TodoList;
