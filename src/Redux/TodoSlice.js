import { createSlice } from "@reduxjs/toolkit";

const getTodos = () => {
    const data = localStorage.getItem("todos");

    if (data) {
        return JSON.parse(data);
    }

    return [];
};

const initialState = {
    todos: getTodos()
};

const todoSlice = createSlice({
    name: "todo",
    initialState,

    reducers: {

        addTodo: (state, action) => {

            state.todos.push({
                id: Date.now(),
                text: action.payload,
                completed: false
            });

            localStorage.setItem("todos", JSON.stringify(state.todos));
        },

        deleteTodo: (state, action) => {

            state.todos = state.todos.filter(
                todo => todo.id !== action.payload
            );

            localStorage.setItem("todos", JSON.stringify(state.todos));
        },

        toggleTodo: (state, action) => {

            const todo = state.todos.find(
                t => t.id === action.payload
            );

            if (todo) {
                todo.completed = !todo.completed;
            }

            localStorage.setItem("todos", JSON.stringify(state.todos));
        }

    }
});

export const {
    addTodo,
    deleteTodo,
    toggleTodo
} = todoSlice.actions;

export default todoSlice.reducer;