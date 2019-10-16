import React, { Component } from 'react';
import uuid from 'uuid';
import './AddNewTodo.css'

class AddNewTodo extends Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTodo({ ...this.state, id: uuid(), completed: false });
        this.setState({ task: '' });
    }
    render() {
        return (
            <form className='NewTodoForm' onSubmit={this.handleSubmit}>
                <label htmlFor="Task">Enter Todo</label>
                <input
                    onChange={this.handleChange}
                    type="text"
                    name="task"
                    value={this.state.task}
                    id="task"
                    placeholder='Enter New Todo' />
                <button>Add Todo</button>
            </form>
        );
    }
}

export default AddNewTodo;
