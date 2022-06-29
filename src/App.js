import React, { useReducer, createContext } from "react";
import ToDoList from "./components/ToDoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";

function todosReducer(state, action) {
  switch (action.type) {
    case "add":
      const newToDo = { id: uuidv4(), text: action.payload };
      const addedToDos = [...state.todos, newToDo];
      return { ...state, todos: addedToDos };

    case "delete":
      const filteredTodoState = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return { ...state, todos: filteredTodoState };
    default:
      return todosInitialState;
  }
}

export const TodosContext = createContext();

const todosInitialState = {
  todos: [
    { id: 1, text: "finish writing code" },
    { id: 2, text: "play a video game" },
    { id: 3, text: "read a novel" },
  ],
};
function App() {
  const [state, dispatch] = useReducer(todosReducer, todosInitialState);
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <ToDoList />
    </TodosContext.Provider>
  );
}

export default App;
