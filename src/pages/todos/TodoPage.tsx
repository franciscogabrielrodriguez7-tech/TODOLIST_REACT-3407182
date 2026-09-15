import { useState, useEffect } from 'react'


import ListTodo from '../../components/todos/ListTodo';
import type { Priority, Todo } from '../../interfaces/todos/Form'
import FormTodo from '../../components/todos/FormTodo';
import { consultarTodosAxios, crearTodoFetch } from '../../services/TodoService';



const TodoPage = () => {

  
  const [listaTodo , setListaTodo] = 
              useState<Todo[]>([])

      //useEffect: hook: metodo para controlar cliclos de vida del componente
      //                 controlar lo que pase cuando se carga el componente(App)
      //por primera vez
      useEffect(()=>{
        const consultar = async()=>{
          //llame al servicio para traer datos
          const datos = await consultarTodosAxios()
          //cargar el estado con los datos traidos
          setListaTodo(datos)
        }
        consultar()
      },[])

      //crear funcion para añadir nueva tarea a listaTodo pero aislada
      // necesita los atributos de la nueva tarea como parametros
      const addToDo = async ( titulo: string, 
                        prioridad: Priority ) => {
      
        const Tarea: Todo={ 
            //UUID: tipo de dato ID unico y Universal
              id: crypto.randomUUID(),
              titulo: titulo,
              prioridad: prioridad,
              completada: false
        }
      
        //guardar el nuevo todo en la api
        //const nuevaData = await crearTodoFetch(Tarea)
        const nuevaData = await crearTodoFetch(Tarea)
      
      
        
      
      //poner la nueva tarea en la lista
      setListaTodo((prev)=>[...prev , nuevaData])
      }
  return  (
    <>
        <FormTodo addToDo={addToDo} />
        <ListTodo TodoLista={listaTodo}/>
    </>
    )
} 


export default TodoPage

