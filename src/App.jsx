import './App.css'
import { FaUserCircle,FaArrowCircleRight } from 'react-icons/fa'
import SideBar from './components/SideBar/Index'

import React from 'react'

const App = () => {
  return (
    <div className='container mx-auto'>

      <div className="container grid grid-cols-2  w-full  h-full">

  <div>
  <SideBar />
  </div>
      
        


        <div className="chatBox w-full h-full bg-slate-100">


          <div className="profile bg-slate-100 h-30 flex gap-4  items-center py-8 px-8">
            <FaUserCircle className='text-4xl justify-start cursor-pointer text-blue-200'></FaUserCircle>
            {/* person who you are chatting with */}
            <h2 className=''></h2>
          </div>

          {/* textbox */}
          <div className='bg-slate-100 flex  translate-y-32 justify-between mt-96'>
            <input type="text" placeholder='Type a Message ' className='bg-slate-700 text-white rounded w-full  h-12 text-align' />
            <FaArrowCircleRight className='text-3xl  cursor-pointer  text-slate-400  mt-4'></FaArrowCircleRight></div>
        </div>










      </div>


    </div>
  )
}

export default App