import React, { useState } from 'react'
import DUMMY_TwEET from '../data'
export default function MainInput({handleChange, handleClick}) {

  return (
    <div className=''>
        <textarea onChange={(e) => handleChange(e)} name="" id="" cols="30" rows="3" placeholder='Enter your thoughts...' className='w-full bg-blue-100 p-4 border border-sky-500 resize-none outline-none'></textarea>
        <button onClick={handleClick} className='bg-blue-950 text-stone-200 px-4 py-2 rounded-sm flex ms-auto me-2'>Post</button>
    </div>
  )
}