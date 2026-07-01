import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="container">
      <h1>📝 Redux Todo</h1>

      <TodoForm />

      <TodoList />
    </div>
  );
}

export default App;