import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.todo.task
        }
    }

    handleRemove = () => {
        this.props.removeTodo(this.props.id);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    toggleForm = () => {
        this.setState({ isEditing: !this.state.isEditing });
    }

    handleUpdate = (e) => {
        e.preventDefault();

        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({ isEditing: false });
    }

    render() {
        const todo = this.props.todo
        return (
            <React.Fragment>
                {
                    this.state.isEditing === false ? (
                        < div >
                            <button onClick={this.toggleForm}>Edit</button>
                            <button onClick={this.handleRemove}>X</button>
                            <li>{todo.task}</li>
                        </div >
                    ) : (
                            <div>
                                <form onSubmit={this.handleUpdate}>
                                    <input onChange={this.handleChange}
                                        type="text"
                                        id="task"
                                        name='task'
                                        value={this.state.task} />
                                    <input type="submit" value="Save" onClick={this.handleUpdate} />

                                </form>
                            </div>
                        )
                }
            </React.Fragment>


        )
    }

}

export default Todo;
