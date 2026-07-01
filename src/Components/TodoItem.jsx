import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../Redux/TodoSlice";
import "./TodoItem.css";

function TodoItem({ todo }) {
    const dispatch = useDispatch(); 

    return (
        <li className="todo-item">

            <div className="left">

                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch(toggleTodo(todo.id))}
                />

                <span
                    className={`todo-text ${todo.completed ? "completed" : ""}`}
                >
                    {todo.text}
                </span>

            </div>

            <button
                className="delete-btn"
                onClick={() => dispatch(deleteTodo(todo.id))}
            >
                Delete
            </button>

        </li>
    );
}

export default TodoItem;