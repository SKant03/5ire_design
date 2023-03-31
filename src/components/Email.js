import React from 'react'

const Email = () => {
  return (
    <div>
      <div className='flex justify-center gap-6 text-2xl h-[70px]'>
        <input type="email" placeholder='Please Enter your Email Address' className='w-[700px] rounded-3xl text-center' />
        <button type="submit" className='bg-[#77FFE7] rounded-3xl px-8'>Get started</button>
      </div>
    </div>
  )
}

export default Email
