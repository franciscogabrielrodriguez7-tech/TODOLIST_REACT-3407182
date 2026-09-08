import {useState} from 'react'
import type { ChangeEvent } from 'react'
import type { Priority, TodoForm} from '../interfaces/Form'
// Interface en la cual definimos un prop funcion

interface FormTodoProps{
    addToDo: (titulo: string, prioridad:Priority)=>void
}


function FormTodo({addToDo}:FormTodoProps){

    // estado para el formulario
      const [ formulario, setFormulario ] = useState<TodoForm>({
                          titulo:'',
                          prioridad:'Baja'
                        })
    
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

const envioForm =(event:any)=>{
    // quitar el comportamiento por defecto de un formulario
    // submit
    event.preventDefault();
    addToDo(formulario.titulo,
        formulario.prioridad)
    
     // limpiar form:
    setFormulario({
        titulo:"",
        prioridad:"Baja"
    })
    
    
    
    }
   
      
  return (
    
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
  )
}

export default FormTodo
