import React from 'react'
import { FaUserCircle, FaUserFriends, FaStackExchange, FaFacebookMessenger,FaBars, FaSearch} from 'react-icons/fa'





const SideBarHeader = () => {
  return (
    <div>

      <div className="container ">

        {/* profile icons */}
        <div className="profile bg-slate-100 h-10 flex justify-between items-center py-8 px-8">
          <FaUserCircle className='text-6xl justify-start cursor-pointer text-slate-200'></FaUserCircle>

          {/* icons */}
          <div className="group-icons flex gap-4">
            <FaUserFriends className='text-2xl cursor-pointer text-slate-500'></FaUserFriends>
            <FaStackExchange className='text-2xl cursor-pointer text-slate-500'></FaStackExchange>
            <FaFacebookMessenger className='text-2xl cursor-pointer text-slate-500'></FaFacebookMessenger>
            <FaBars className='text-2xl cursor-pointer text-slate-500'></FaBars>
          </div>
        </div>



        {/* searchBar */}
        <div className="searchBar bg-white w-full  flex justify-center items-center relative h-12">
          <FaSearch className='text-lg cursor-pointer lg:translate-x-9 lg:mt-2 text-slate-500'></FaSearch>
          <input type="text" placeholder='search or start new chat' className='bg-slate-200 mt-2 rounded md:w-full lg:w-2/3 h-11  ' />
        </div>
        {/* border-line */}
        <div className='border-line border-2 border-black mt-2 w-full'>
        </div>

      </div>

    </div>
  )
}

export default SideBarHeader