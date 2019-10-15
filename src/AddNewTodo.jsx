import React, { Component } from 'react'

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
        this.props.createTodo(this.state);
        this.setState({ task: '' });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="Enter Todo"></label>
                    <input onChange={this.handleChange}
                        type="text"
                        name="task"
                        value={this.state.task}
                        id="task"
                        placeholder='Enter New Todo' />
                    <input type="submit" value="Submit" />
                </form>

            </div>
        )
    }
}

export default AddNewTodo;
