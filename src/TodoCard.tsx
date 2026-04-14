import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

type TodoCardProps = {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export default function TodoCard({ todo, completeTodo, deleteTodo }: TodoCardProps) {
  return (
    <div className="todo-card">
      <div className="bg-purple-800 p-2 rounded-md flex justify-between items-center my-4 text-white">
        <p className={`${todo.completed === true ? "line-through" : ""}`}>
          {todo.text}
        </p>
        <div className="flex items-center gap-2 cursor-pointer">
          <FaCheckCircle
            className="hover:text-gray-300"
            onClick={() => completeTodo(todo.id)}
          />
          <FaTrash
            className="hover:text-gray-300"
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      </div>
    </div>
  );
}
