import {useState} from 'react'
import type { ChangeEvent } from 'react'
import type { TodoForm, Todo } from './interfaces/Form'
import { FiCheckCircle, FiAlertCircle, } from "react-icons/fi"
import ContadorTareas from './views/contadorTareas'

const App = () => {

  //datos internos del componente
  // se engancha la variable(hooks) la variable
  // contador para el componenente
  // useState: Hook que permite crear un Estado (variable reactiva)
  const [ contador, setContador] = useState<number>(10)
  // estado para el formulario
  const [ formulario, setFormulario ] = useState<TodoForm>({
                      titulo:'',
                      prioridad:'Baja'
                    })
  const [ listaTodo, setListaTodo ] = useState<Todo[]>([])

  //funcion para incrementar la variable 
  const incrementar = () => {
    // funcion del estado para modificar o asignar valor al estado
    // para evitar la perdida del dato se trabaja con una funcion reductora
    // prev: tomar el dato anterior del estado(variable reactiva)
    setContador((prev)=>(prev + 1))}
    // console.log(`contador: ${contador + 1}`)
  
  const decrementar = () => {
    setContador((prev)=>(prev - 1))
  }

  // funcion para tratar información del formulario
  const inputChange =(event:ChangeEvent<HTMLInputElement> | 
                            ChangeEvent<HTMLSelectElement>)=>{
      //separar nombre de el control y valor en dos variables
      const{ name , value } = event.target
      console.log(`${name} - ${value}`)

      // asignar los valores del formulario al estado:
      //operador spread: separar un objeto (form )
      setFormulario({
        ...formulario,
        [name] : value
      })
  }
  // function para tratar submit
  const envioForm =(event:any)=>{
    // quitar el comportamiento por defecto de un formulario
    // submit
    event.preventDefault();
    // establecer el atributo "completada" a la tarea del formulario
    
    const Tarea: Todo = {
      // UUID es un tipo de dato de ID unico y universal
      id: crypto.randomUUID(),
      ...formulario,  
        completada:false
      }; 
    // spread: separar cada todo en el arreglo, 
    // volverlos a unir en otro arreglo
    // pero con el nuevo TODO
    setListaTodo([...listaTodo, Tarea])
    // cambiar el estado del formulario a vacio
    setFormulario({
      titulo:'',
      prioridad:'Baja'
    })
  }
  return (
    <>
    <h1>Mis tareas</h1>
    <ContadorTareas
      contador={contador}
      incrementar={incrementar}
      decrementar={decrementar}
    />
    {/*el formulario para registro de nuevo todo*/ }
    <section>
        <h2> Registro de nueva tarea </h2>
        <form onSubmit={envioForm}>
            {/*un div por cada control de form*/}
            <div>
                {/* cada control tendra un label y un input*/}
                <label htmlFor='titulo'>Titulo:</label>
                <input 
                      type="text"
                      id="titulo"
                      placeholder="p.ej revisar github"
                      name="titulo"
                      onChange={ inputChange }
                      value={ formulario.titulo }
                 />
            </div>
            <div>
              <label htmlFor='prioridad'>Prioridad:</label>
              <select  
                  id="prioridad"
                  name="prioridad"
                  onChange={inputChange}
                  value={ formulario.prioridad }
                  
              >
                 {/*programacion para elegir la opcion determinada en el input del formulario*/}
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baja" >Baja</option>
              </select>
            </div>
            <div>
              <button type='submit'>
                Crear ToDo
              </button>
            </div>
        </form>
    </section>
    <section>
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
            listaTodo.map((todo: Todo)=>(
              <tr>
                <td>{todo.id}</td>
                <td>{todo.titulo}</td>
                <td>{todo.prioridad}</td>
                {/*operador ternario*/}
                <td>{(todo.completada) === true ? 
                                <span style={
                                              { color:'rgb(27,165,53)'
                                              }
                                            }>Si <FiCheckCircle />
                                            </span>: 
                                <span style={
                                              { color:'red'
                                              }
                                            }> No <FiAlertCircle />
                                </span>
                    }
                </td>
              </tr>
            ))
          }

        </tbody>
        <tfoot></tfoot>
      </table>
    </section>
    </>
  )
}

export default App
