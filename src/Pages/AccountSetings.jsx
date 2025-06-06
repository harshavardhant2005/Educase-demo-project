import React from 'react'
import image from "../assets/image.png"
const AccountSetings = () => {
  return (
    <section className='h-[615px] w-[287px] bg-[#F7F8F9] border-solid border-1 border-[grey] flex flex-col font-sans relative'>
        
        <nav className='h-[50px] w-full bg-white'> 
          <header className='ml-[16px] mt-[20px] font-semibold mb-[15px]'>
            <h1>Account Setings</h1>
          </header>
        </nav>

    <main className='h-[160px] w-full bg-[#f7f8f9]'>
      <section className='flex mt-[25px]'>
        <img src={image} alt="" className='size-[50px] rounded-full ml-[16px]'/>
        <header className='flex flex-col ml-[10px]'>
            <h1 className='font-semibold'>Mary Doe</h1>
            <h3 className='text-[12px]'>maryry@gmail.com</h3>
        </header>
      </section>
      <p className='text-[12px] mx-[16px] mt-[5px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga placeat deserunt sed in voluptas ab libero hic minus, quasi porro facilis delectus laboriosam.
      </p>
    </main>
    </section>
    
  )
}

export default AccountSetings
