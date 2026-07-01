import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/TodoSlice";
import "./TodoForm.css";

function TodoForm() {

    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!text.trim()) return;

        dispatch(addTodo(text));

        setText("");
    };

    return (

       <form onSubmit={handleSubmit} className="todo-form">

            <input
                type="text"
                placeholder="Enter Todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button>Add</button>

        </form>

    );
}

export default TodoForm;