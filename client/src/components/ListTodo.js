import React,{Fragment, useEffect, useState} from "react";

const ListTodo = () => {
    const [todos, setTodos] = useState([]);

    // delete todo function

    const deleteTodo = async id => {
        try {
            const deleteTodo = await fetch(`/todos/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.todo_id !== id));
            console.log(deleteTodo);

        } catch (error) {
            console.error(error.message);
        }   
    };

    const getTodos = async () => {
        try {
            const response = await fetch("/todos");
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (error) {
            console.error(error.message);
            
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (        
        <Fragment>
            <h1>List of Todos</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                 {todos.map(todo => (
                    <tr key={todo.todo_id}>
                        <td>{todo.description}</td>
                        <td><button>Edit</button></td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                        </td>
                    </tr>
                 ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListTodo;
