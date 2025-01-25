import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }
  return (
    <div className='py-8 text-center'>
      <p className='text-gray-900 text-2xl font-medium'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 font-medium mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

      <form onSubmit={onSubmitHandler} className='flex justify-center py-5'>
      <input type="email" className='border py-3 px-2 w-[40%] outline-none' placeholder='Enter your email' required />
      <button type='submit' className='text-white bg-black p-3 text-xs px-7'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
