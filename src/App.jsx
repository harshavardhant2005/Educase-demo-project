import React from 'react'
import "./style.css"
import Home from './Pages/Home'
import Login from './Pages/Login'

const App = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center font-sans'>
        <Login></Login>
    </div>
  )
}

export default App
