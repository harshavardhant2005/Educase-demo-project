import React from 'react'

const Login = () => {
  return (
    <section className='h-[615px] w-[287px] bg-[#F7F8F9] border-solid border-1 border-[grey] flex flex-col font-sans relative'>
        
    <header className='mt-[30px]'>
      <h1 className=' px-[16px] font-semibold text-[20px]'>
        <span className='block'>Signin to your</span>
        <span>PopX account</span>
        </h1>
    </header>

    <article className='mt-[10px]'>
        <p className='px-[16px] text-[14px]  text-gray-500 flex flex-col'>
            <span>Lorem ipsum dolor sit amet, </span>
            <span>consectetur adipisicing elit.</span>
        </p>
    </article>

    <main className='mt-[20px] mx-[16px] '>
      <form action="" className='flex flex-col gap-[20px]'>
        <div >
          <label htmlFor="email" className="relative block">
            
            <input type="email" name="email" required id="email" placeholder="enter email address" className="py-1 px-3 text-lg outline-none border-2 border-gray-200 rounded hover:border-gray-600 duration-200 peer focus:border-gray-400 w-full"/>
            <span className="absolute left-3 text-[#6C25FF] text-[16px] text-sm top-[-10px] bg-white px-1">
              Email Address
            </span>
          </label>

        </div>
        
        <div >
          <label htmlFor="password" className="relative block">
            
            <input type="password" name="password" required id="password" placeholder="Enter password" className="py-1 px-3 text-lg outline-none border-2 border-gray-200 rounded hover:border-gray-600 duration-200 peer focus:border-gray-400 w-full"/>
            <span className="absolute left-3 text-[#6C25FF] text-[16px] text-sm top-[-10px] bg-white px-1">
              Password
            </span>
          </label>

        </div>
      </form>
    </main>

    <footer className='ml-[16px] items-end mt-[10px]'>
      <button className='h-[34px] w-[253px] bg-[#CEBAFB] text-[white] rounded-[3px] font-semibold text-[14px] cursor-pointer'>Login</button>
    </footer>

  </section>
  )
}

export default Login
