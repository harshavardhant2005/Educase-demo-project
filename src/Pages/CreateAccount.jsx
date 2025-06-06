import React from 'react'

const CreateAccount = () => {
  return (
  <section className='h-[615px] w-[287px] bg-[#F7F8F9] border-solid border-1 border-[grey] flex flex-col font-sans relative'>
        
    <header className='mt-[30px]'>
      <h1 className=' px-[16px] font-semibold text-[20px]'>
        <span className='block'>Create your</span>
        <span>PopX account</span>
        </h1>
    </header>

    <main className='mt-[20px] mx-[16px] '>
      <form action="" className='flex flex-col gap-[20px]'>
        <div >
          <label htmlFor="fullname" className="relative block">
            
            <input type="text" name="fullname" required id="fullname" placeholder=" " className="py-1 px-3 text-lg outline-none border-2 border-gray-200 rounded hover:border-gray-600 duration-200 peer focus:border-gray-400 w-full"/>
            <span className="absolute left-3 top-2.5 text-lg tracking-wide text-[#6C25FF] peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-2.5 peer-focus:text-sm peer-focus:top-[-10px] peer-focus:text-indigo-600 duration-200 pointer-events-none bg-white px-1">
              full name
            </span>
          </label>

        </div>
        
        <div >
          <label htmlFor="phonenumber" className="relative block">
            
            <input type="tel" name="phonenumber" required id="phonenumber" placeholder=" " className="py-1 px-3 text-lg outline-none border-2 border-gray-200 rounded hover:border-gray-600 duration-200 peer focus:border-gray-400 w-full"/>
            <span className="absolute left-3 top-2.5 text-lg tracking-wide text-[#6C25FF] peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-2.5 peer-focus:text-sm peer-focus:top-[-10px] peer-focus:text-indigo-600 duration-200 pointer-events-none bg-white px-1">
              Phone number
            </span>
          </label>

        </div>
        
        <div >
          <label htmlFor="email" className="relative block">
            
            <input type="email" name="email" required id="email" placeholder=" " className="py-1 px-3 text-lg outline-none border-2 border-gray-200 rounded hover:border-gray-600 duration-200 peer focus:border-gray-400 w-full"/>
            <span className="absolute left-3 top-2.5 text-lg tracking-wide text-[#6C25FF] peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-2.5 peer-focus:text-sm peer-focus:top-[-10px] peer-focus:text-indigo-600 duration-200 pointer-events-none bg-white px-1">
              email
            </span>
          </label>

        </div>
        
        <div >
          <label htmlFor="password" className="relative block">
            
            <input type="password" name="password" required id="password" placeholder=" " className="py-1 px-3 text-lg outline-none border-2 border-gray-200 rounded hover:border-gray-600 duration-200 peer focus:border-gray-400 w-full"/>
            <span className="absolute left-3 top-2.5 text-lg tracking-wide text-[#6C25FF] peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-2.5 peer-focus:text-sm peer-focus:top-[-10px] peer-focus:text-indigo-600 duration-200 pointer-events-none bg-white px-1">
              Password
            </span>
          </label>

        </div>
        
        <div >
          <label htmlFor="companyname" className="relative block">
            
            <input type="password" name="companyname" required id="companyname" placeholder=" " className="py-1 px-3 text-lg outline-none border-2 border-gray-200 rounded hover:border-gray-600 duration-200 peer focus:border-gray-400 w-full"/>
            <span className="absolute left-3 top-2.5 text-lg tracking-wide text-[#6C25FF] peer-placeholder-shown:text-[16px] peer-placeholder-shown:top-2.5 peer-focus:text-sm peer-focus:top-[-10px] peer-focus:text-indigo-600 duration-200 pointer-events-none bg-white px-1">
              Company name
            </span>
          </label>

        </div>

        <div>
          <label htmlFor="radio" className='text-[12px] block'>Are you an agency?</label>
          <section className='flex gap-2 items-center'>
          <input type="radio" name="radio"  className='accent-[#6C25FF]'/>Yes 
          <input type="radio" name="radio" className='accent-[#6C25FF]'/>No 
          </section>
        </div>
      </form>
    </main>

    <footer className='ml-[16px] items-end absolute left-0 bottom-[30px]'>
      <button className='h-[34px] w-[253px] bg-[#6C25FF] text-[white] rounded-[3px] font-semibold text-[14px] cursor-pointer'>Create Account</button>
    </footer>

  </section>
  )
}

export default CreateAccount
