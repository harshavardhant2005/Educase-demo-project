import "./style.css"
import { Outlet, RouterProvider } from 'react-router-dom'
import Myroutes from './router/routes'

const App = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center font-sans'>
        <RouterProvider router={Myroutes}>
        </RouterProvider>
    </div>
  )
}

export default App
