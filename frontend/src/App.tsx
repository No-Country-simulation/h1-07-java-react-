import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './auth/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
