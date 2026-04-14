import "./App.css";
import TodoCard from "./TodoCard";
import { useState } from "react";

type Todos = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInput("");
  };

  const completeTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="bg-purple-950 p-2 min-h-screen flex justify-center items-center">
        <div className="max-w-lg w-[90%] bg-slate-900 p-4 rounded-md shadow-md">
          <h1 className="text-center text-white text-2xl">Todos for the day</h1>
          <div className="flex gap-2 justify-center my-8">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add Todo"
              className="flex-[3] border-2 outline-none border-gray-500 text-white placeholder-gray-500 p-2 rounded-md"
            />
            <button
              onClick={addTodo}
              className="flex-[1] bg-purple-800 cursor-pointer rounded-md text-sm hover:bg-purple-900 text-white"
            >
              Add Todo
            </button>
          </div>
          <div>
            <h1 className="text-center text-white text-xl font-bold">Todos</h1>

            {todos.length > 0 ? (
              <>
                {todos.map((todos) => {
                  return (
                    <TodoCard
                      key={todos.id}
                      todo={todos}
                      completeTodo={completeTodo}
                      deleteTodo={deleteTodo}
                    />
                  );
                })}
              </>
            ) : (
              <h1 className="text-center text-white text-xl my-2">You have completed your tasks</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
