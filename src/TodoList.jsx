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

    updateTodo = (id, updatedTask) => {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return ({ ...todo, task: updatedTask })

            }
            return todo
        })
        this.setState({ todos: updatedTodos });
    }

    toggleCompletion = (id) => {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo
        });
        this.setState({ todos: updatedTodos });
    }

    render() {
        const todos = this.state.todos
        return (
            <div>
                <AddNewTodo createTodo={this.createTodo} />

                <h1>Todo List!</h1>
                {
                    todos.map(todo => (
                        <Todo
                            removeTodo={() => { this.handleRemove(todo.id) }}
                            id={todo.id}
                            completed={todo.completed}
                            todo={todo}
                            key={todo.id}
                            updateTodo={this.updateTodo}
                            toggleTodo={() => { this.toggleCompletion(todo.id) }}
                        />
                    ))
                }
            </div>
        )
    }
}

export default TodoList;
