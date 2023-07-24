import React, { useState } from 'react'
import { FaUserCircle} from 'react-icons/fa'

const Friends = (props) => {
  return (
    <div>
        {/* chats */}
        <div className="chats flex justify-between gap-2">
            {/* userOne */}
            <div className="flex gap-4">
                <div className='image'>
                <img src={props.image} alt="" className='rounded-full mb-2.5 w-12 h-12' />
                </div>
            

              <div className="text grid cursor-pointer ">
                <p className='my-5' >{props.username}</p>
                <p className=''>{props.message}</p>


              </div>

            </div>

            <p className='mt-4 text-md text-slate-300'>Yesterday</p>

          </div>
    </div>
  )
}

export default Friends