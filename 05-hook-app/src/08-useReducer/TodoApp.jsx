import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useEffect } from 'react';

const initialState = [

]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  

  const handleNewTodo = ( todo ) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    dispatch(action);

  }

  const handleDeleteTodo = ( id ) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    });
  }

  const handleToggleTodo = ( id )=> {
    console.log(id);
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    })
  }

  return (
    <>

      <h1>TodoApp 10, <small>pendientes: 2</small></h1>
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
