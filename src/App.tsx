import {Routes, Route, NavLink, Navigate} from 'react-router-dom'
import TodoPage from './pages/todos/TodoPage'
import UserPage from './pages/users/UserPage'


const App = () => {

  return (
    // Bloque de navegación global 
  <>
    <nav style = {{display:'flex', 
                  gap:'50px',
                  paddingBottom:'10px',
                  paddingTop:'10px',
                  backgroundColor:'rgb(117, 158, 235)',
                  padding:'10px',
                  color:'white',
                  fontWeight:'bold',
                  fontSize:'20px'
                  }}>
      <NavLink to="/todos">Todos</NavLink>
      <NavLink to="/users">Users</NavLink>
    </nav>
  <hr />
  <main>
    <Routes>
      <Route 
            path="/todos" 
            element={<TodoPage/>}
      />
      <Route 
            path="/users" 
            element={<UserPage/>}
      />
    </Routes>
  </main>
  </>
  )
}

export default App