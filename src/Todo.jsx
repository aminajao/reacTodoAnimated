import React from 'react'

function Todo({ todo }) {
    return (
        <div>
            <button>Edit</button>
            <button>X</button>
            <li>{todo.task}</li>
        </div>
    )
}

export default Todo;
