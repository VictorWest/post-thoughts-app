import React from 'react'

export default function Header() {
  return (
    <header className='flex items-center bg-blue-950 text-stone-200 p-4'>
        <i class="fa-solid fa-house"></i>
        <h3 className='ps-4'>Post Thoughts App</h3>
        <div className='ms-auto flex gap-5'>
            <i class="fa-brands fa-github hover:text-black"></i>
            <i class="fa-brands fa-linkedin hover:text-black"></i>
            <i class="fa-brands fa-whatsapp hover:text-black"></i>
        </div>
    </header>
  )
}
