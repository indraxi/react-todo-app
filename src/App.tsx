import { useState } from "react";
import "./index.css";

type Todo = {
  content: string;
  complete: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<string>("");

  function addTodo() {
    if (!todo) {
      alert("No todo!");
      return;
    }

    const newTodos: Todo[] = [{ content: todo, complete: false }, ...todos];
    setTodos(newTodos);
  }

  function toggleTodo(index: number) {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { content: todo.content, complete: !todo.complete };
      }
      return todo;
    });

    function removeTodo() {
      // @todo
    }

    setTodos(newTodos);
  }

  return (
    <div className="App bg-zinc-900 min-w-screen min-h-screen flex flex-col justify-center items-center gap-4">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Enter todo"
          onChange={(e) => setTodo(e.target.value)}
          className="focus:outline-none bg-zinc-200 text-zinc-900 rounded-lg p-2"
        />
        <button
          onClick={() => addTodo()}
          className="bg-zinc-200 text-zinc-900 rounded-lg p-2 px-4"
        >
          Add
        </button>
      </div>
      <div className="todo-container flex flex-col justify-center gap-2">
        {todos.map((todo, i) => (
          <div key={i} className="flex justify-between items-center">
            <div className="flex gap-2 justify-center items-center">
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => toggleTodo(i)}
              />
              <p
                className={`text-zinc-100 text-lg
                ${todo.complete && "line-through"}
              `}
              >
                {todo.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;