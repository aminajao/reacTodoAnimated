import React, { Component } from 'react'

class Todo extends Component {
    handleRemove = () => {
        this.props.removeTodo(this.props.id);
    }
    render() {
        const todo = this.props.todo
        return (
            <div>
                <button>Edit</button>
                <button onClick={this.handleRemove}>X</button>
                <li>{todo.task}</li>
            </div >
        )
    }

}

export default Todo;
