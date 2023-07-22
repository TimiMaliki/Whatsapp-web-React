import React from 'react'
import { FaUserCircle} from 'react-icons/fa'

const Friends = () => {
  return (
    <div>
        {/* chats */}
        <div className="chats flex justify-between">
            {/* userOne */}
            <div className="flex gap-4">
              <FaUserCircle className='text-6xl mt-4 justify-start cursor-pointer text-slate-100'></FaUserCircle>

              <div className="text grid cursor-pointer ">
                <h2 className='mt-4'></h2>
                <p>Una last dance</p>
              </div>

            </div>

            <p className='mt-4 text-md text-slate-300'>Yesterday</p>

          </div>
    </div>
  )
}

export default Friends