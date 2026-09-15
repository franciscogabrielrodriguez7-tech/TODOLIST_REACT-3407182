import React from 'react'
import type { IUser } from '../../interfaces/users/IUsers'

interface ListUsersProps{
    u: IUser[]
}

const ListUsers = ({u}: ListUsersProps) => {
  return (
    <>
    <div>
      <h1>Lista de usuarios</h1>
    </div>
    <table className='blueTable'>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                u.map((us:IUser)=>(
                    <tr key={us.id}>
                        <td>{us.nombre}</td>
                        <td>{us.email}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    </>

  )
}

export default ListUsers
