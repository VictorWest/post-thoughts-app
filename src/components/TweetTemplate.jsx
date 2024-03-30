import React from 'react'
export default function TweetTemplate({img, name, username, content}) {
  return (
    <div className='m-5 flex flex-col flex-wrap bg-slate-950 p-2 px-5 w-fit rounded-md text-stone-300 mx-auto'>
        <div className='flex items-center gap-4 pb-3'>
            <img src={img} alt="" className='w-9 rounded-full'/>
            <div>
                <h3 className='cursor-pointer hover:text-stone-100'>{name}</h3>
                <p className='text-xs text-stone-400 cursor-pointer hover:text-stone-100'>@{username}</p>                 
            </div>
        </div>
        <div>{content}</div>
        <div className='p-3 flex justify-center gap-5'>
            <div className='flex items-center gap-3 border px-5 py-2 border-stone-700 cursor-pointer'>
                <i class="fa-regular fa-heart hover:text-red-900 shadow-md"></i> 
                <p>Like</p>
            </div>
            <div className='flex items-center gap-3 border px-5 py-2 border-stone-700 cursor-pointer'>
                <i class="fa-regular fa-comment hover:text-red-900 shadow-md"></i>
                <p>Comment</p>
            </div>
            <div className='flex items-center gap-3 border px-5 py-2 border-stone-700 cursor-pointer'>
                <i class="fa-regular fa-bookmark hover:text-red-900 shadow-md"></i>
                <p>Bookmark</p>
            </div>
        </div>
    </div>
  )
}
