import './App.css'
import { FaUserCircle,FaArrowCircleRight,FaBars, FaSearch,FaPlus} from 'react-icons/fa'
import SideBar from './components/SideBar'

import React, { useState } from 'react'

const App = () => {
  
const [currentUser , setCurrentUser] = useState({})
const [message, setMessage] = useState('')

const handleClickedUser = (user)=>{
  setCurrentUser(user)
}


 
  return (
    <div className='container mx-auto'>

      <div className="container grid grid-cols-2  w-full  h-full">

  <div>
  <SideBar getUser={handleClickedUser}
  />

  </div>
      
        


        <div className="chatBox w-full h-full bg-white ">
          <div className="profile bg-slate-100 h-10 flex  justify-between items-center py-8 px-8">
            <FaUserCircle className='text-6xl justify-start cursor-pointer text-slate-200'></FaUserCircle>
                {/* person who you are chatting with */}
            <h2 className=''>{currentUser?.userName}</h2>
            <div className='flex gap-6'>
            <FaSearch className='text-2xl text-slate-500'></FaSearch>
            <FaBars className='text-2xl text-slate-500'></FaBars>
            </div>
          </div>
          
             
          <p className='flex justify-center text-center mt-32'>
          {message}
          </p>
          {/* textbox */}
          <div className='bg-white flex  translate-y-32 justify-between mt-96'>
            <FaPlus className='text-3xl  cursor-pointer  text-slate-400  mt-2'></FaPlus>
            <input type="text" placeholder='Type a Message ' 
            className='bg-slate-100 text-black rounded w-full  h-12 text-align' 
             value={message} onChange={
              (e) => setMessage(e.target.value) 
            }
            />




            <FaArrowCircleRight className='text-3xl  cursor-pointer  text-slate-400  mt-2'>
              </FaArrowCircleRight>
            
              </div>
        </div>




        {/* onChange={inBox} value={message} */}





      </div>


    </div>
  )
}

export default App