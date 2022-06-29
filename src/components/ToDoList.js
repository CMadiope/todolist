import React, { useContext, useState } from "react";
import { TodosContext } from "../App";
import { Table, Form, Button } from "react-bootstrap";

const ToDoList = () => {
  const { state, dispatch } = useContext(TodosContext);
  const [todoText, setTodoText] = useState("");

  return (
    <div>
      <Form>
        <Form.Group controlled='formBasicEmail'>
          <Form.Control
            type='text'
            placeholder='Enter To Do'
            onChange={(event) => setTodoText(event.target.value)}
          />
        </Form.Group>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>To Do</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {state.todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.text}</td>
              <td>Edit</td>
              <td onClick={() => dispatch({ type: "delete", payload: todo })}>
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ToDoList;
