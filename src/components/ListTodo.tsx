import React from 'react'
import type { Todo  } from '../interfaces/Form'
import ItemTodo from './ItemTodo'

interface ListTodoProps{
    TodoLista: Todo[]
}

// LisTodo va a mostrar la lista de tareas 
// La lista de tareas se va a suministrar del papa App.tsx
// Llega aqui por medio de un prop  

function ListTodo({TodoLista}:ListTodoProps) {
  return (
<section>
     {/*@por hacer: cortar y pegar la tarea*/}
      <h1>Mis tareas</h1>
      <table className='blueTable'>
        <thead>
          <tr>
            <th>id</th>
            <th>titulo</th>
            <th>propiedad</th>
            <th>completada</th>
          </tr>
        </thead>
        <tbody>
          {
            TodoLista.map((todo: Todo)=>(
              <ItemTodo t={todo} />
            ))
          }

        </tbody>
        <tfoot></tfoot>
      </table>
    </section>  

)
  
}

export default ListTodo
