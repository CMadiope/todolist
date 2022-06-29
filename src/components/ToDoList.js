import React,{useContext} from 'react'
import { TodosContext } from '../App'
import Table from 'react-bootstrap/Table'


const ToDoList = () => {
  const {state, dispatch} = useContext(TodosContext)
  return (
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>To Do</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {state.todos.map(todo => (
        <tr key={todo.id}>
          <td>{todo.text}</td>
          <td>Edit</td>
          <td onClick={() => dispatch({type:'delete',payload:todo})}>Delete</td>
          
        </tr>
      ))}
      </tbody>
      </Table>
    </div>
  );
}

export default ToDoList

