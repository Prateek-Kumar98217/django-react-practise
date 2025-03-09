import react from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import ProtectedRoutes from './components/ProtectedRoutes'

function logout(){
  localStorage.clear();
  return <Navigate to="/login" />
}

function registerLogout(){
  localStorage.clear();
  return <Register/>
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
