import React from 'react'
import "./style.css"
import Home from './Pages/Home'
import Login from './Pages/Login'
import AccountSetings from './Pages/AccountSetings'

const App = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center font-sans'>
        <AccountSetings/>
    </div>
  )
}

export default App
