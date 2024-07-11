import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './auth/Login'
import { Landing } from './pages/landing/Landing'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='' element={<Landing></Landing>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
