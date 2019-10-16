import React, { Component } from 'react'
import './Todo.css';
import { CSSTransition, TransitionGroup } from "react-transition-group";

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

    handleCompletion = () => {
        this.props.toggleTodo()
    }

    render() {
        const { task } = this.props.todo
        return (
            <TransitionGroup className={this.props.completed ? "Todo completed" : "Todo"}>
                {
                    this.state.isEditing ? (
                        <CSSTransition key='editing' timeout={500} classNames='form'>
                            <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
                                <input onChange={this.handleChange}
                                    type="text"
                                    id="task"
                                    name='task'
                                    value={this.state.task} />
                                <input type="submit" value="Save" onClick={this.handleUpdate} />

                            </form>
                        </CSSTransition>
                    ) : (
                            <CSSTransition key='normal' timeout={500} classNames='task-text'>
                                <li onClick={this.handleCompletion}
                                    className={this.props.completed ? 'Todo-task completed' : 'Todo-task'}
                                >{task}
                                </li>
                            </CSSTransition>
                        )
                }
                <div className='Todo-buttons'>
                    <button onClick={this.toggleForm}><i class='fas fa-pen' /></button>
                    <button onClick={this.handleRemove}><i class='fas fa-trash'></i></button>
                </div>
            </TransitionGroup>

        )

    }
}
export default Todo;
