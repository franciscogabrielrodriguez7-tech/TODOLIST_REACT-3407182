import { useState, useEffect } from 'react'
import React from 'react'
import ListUsers from '../../components/users/ListUsers'
import FormUser from './FormUser'
import type { IUser } from '../../interfaces/users/IUsers'
import { getAllUsers } from '../../services/UserService'

const UserPage = () => {

    // crear estado de listado de usuarios
    const [listaUsers , setListaUsers] = useState<IUser[]>([])
    useEffect(()=>{
            const consultar = async()=>{
              //llame al servicio para traer datos
              const datos = await getAllUsers()
              //cargar el estado con los datos traidos
              setListaUsers(datos)
            }
            consultar()
          },[])

  return (
    <>
        <FormUser />
        <ListUsers u ={listaUsers} />
    </>
  )
}

export default UserPage
