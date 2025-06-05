import React from 'react'
import "./style.css"
const App = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
        <div className='h-[615px] w-[287px] bg-[#F7F8F9] border-solid border-1 border-[grey] flex flex-col justify-end  '>
            
            <header >
                <h1 className=' px-[16px] font-semibold text-2xl'>Welcome to PopX</h1>
            </header>

            <main>
            <article className='mt-[10px]'>
                <p className='px-[16px] text-[14px]  text-gray-500 flex flex-col'>
                    <span>Lorem ipsum dolor sit amet, </span>
                    <span>consectetur adipisicing elit.</span>
                </p>
            </article>
            
            <footer className='px-[16px] flex gap-[8px] mt-[20px] flex-col mb-[30px]'>
                <button className='h-[34px] w-[253px] bg-[#6C25FF] text-[white] rounded-[3px] font-semibold text-[14px]'>Create Account</button> 
                <button className='h-[34px] w-[253px] bg-[#CEBAFB] rounded-[3px] font-semibold text-[14px]'>Already Registered? Login</button>
            </footer>
            
            </main>
            

        </div>
    </div>
  )
}

export default App
