import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault ();
    }
    
  return (
    <div className='text-center'>

      <p className='text-2xl font-medium text-gray-800'>Get 20% Off – Subscribe Now!</p>
 

      <form onSubmit ={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email id' required />
        <button className='bg-black text-white text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>
      </form>

    </div>
  )
}

export default NewsletterBox
