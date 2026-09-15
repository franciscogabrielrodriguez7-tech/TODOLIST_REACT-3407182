import {Routes, Route, NavLink, Navigate} from 'react-router-dom'
import TodoPage from './pages/todos/TodoPage'


const App = () => {

  return (
    // Bloque de navegación global 
  <>
    <nav>
      <NavLink to="/todos">Todos</NavLink>
      <NavLink to="/about">Users</NavLink>
    </nav>
  <hr />
  <main>
    <Routes>
      <Route 
            path="/todos" 
            element={<TodoPage/>}
      />
    </Routes>
  </main>
  </>
  )
}

export default App