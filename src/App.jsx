import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUP from './pages/SignUP'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/private/PrivateRoute '
import CheckEmail from './pages/CheckEmail'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signUp' element={<SignUP />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/check-email' element={<CheckEmail />}></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App