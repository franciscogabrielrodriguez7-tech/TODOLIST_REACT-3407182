import React from 'react'
import type { Todo } from '../interfaces/Form'
import { FiCheckCircle, FiAlertCircle, } from "react-icons/fi"

interface ItemTodoProps{
    t : Todo
}

function ItemTodo({t}:ItemTodoProps) {
  return (
    <tr>
                    <td>{t.id}</td>
                    <td>{t.titulo}</td>
                    <td>{t.prioridad}</td>
                    {/*operador ternario*/}
                    <td>{(t.completada) === true ? 
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
  )
}

export default ItemTodo
