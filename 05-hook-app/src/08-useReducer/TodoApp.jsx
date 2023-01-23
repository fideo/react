import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { useTodos } from '../hooks';



export const TodoApp = () => {
  // useTodo 
  // todos, handleToggleTodo, handleDeleteTodo, handleToggleTodo
  const {todos, todosCount, pendingTodosCount, handleNewTodo, handleToggleTodo, handleDeleteTodo, } = useTodos();
  
  return (
    <>

      <h1>TodoApp {todosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
      <br/>
      <div className="row">
        <div className="col-7">
          {/* TodoList*/}
          <TodoList 
            todos={todos} 
            onDeleteTodo={ handleDeleteTodo }
            onToggleTodo={ handleToggleTodo }
          />
          {/* Fin TodoList*/}
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          {/* TodoAdd onNewTodo( todo ) */}
          {/* {id: new Date()..., description: '', done: false} */}
          <hr />
          <TodoAdd 
            onNewTodo={handleNewTodo}
          />

        </div>
      </div>

    
    </>

  )
}
