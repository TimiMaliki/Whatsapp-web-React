import './App.css'
import { FaUserCircle,FaArrowCircleRight,FaBars, FaSearch,FaPlus} from 'react-icons/fa'
import SideBar from './components/SideBar/Index'

import React from 'react'

const App = () => {
  
  return (
    <div className='container mx-auto'>

      <div className="container grid grid-cols-2  w-full  h-full">

  <div>
  <SideBar />
  </div>
      
        


        <div className="chatBox w-full h-full bg-white ">
          <div className="profile bg-slate-100 h-10 flex  justify-between items-center py-8 px-8">
            <FaUserCircle className='text-6xl justify-start cursor-pointer text-slate-200'></FaUserCircle>
            <div className='flex gap-6'>
            <FaSearch className='text-2xl text-slate-500'></FaSearch>
            <FaBars className='text-2xl text-slate-500'></FaBars>
            </div>
            
            {/* person who you are chatting with */}
            <h2 className=''></h2>
          </div>

          {/* textbox */}
          <div className='bg-white flex  translate-y-32 justify-between mt-96'>
            <FaPlus className='text-3xl  cursor-pointer  text-slate-400  mt-2'></FaPlus>
            <input type="text" placeholder='Type a Message ' className='bg-slate-100 text-white rounded w-full  h-12 text-align' />
            <FaArrowCircleRight className='text-3xl  cursor-pointer  text-slate-400  mt-2'></FaArrowCircleRight></div>
        </div>










      </div>


    </div>
  )
}

export default App