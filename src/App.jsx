import './App.css'
import { FaUserCircle } from 'react-icons/fa'
import { FaUserFriends } from 'react-icons/fa'
import { FaStackExchange } from 'react-icons/fa'
import { FaFacebookMessenger } from 'react-icons/fa'
import { FaArrowCircleRight } from 'react-icons/fa'

function App() {


  return (
    <div className='container mx-auto'>

      <div className="container grid grid-cols-2  w-full  h-full">

        <div className="friends  container bg-slate-500">
          {/* profile icons */}
          <div className="profile bg-slate-100 h-30 flex justify-between items-center py-8 px-8">
            <FaUserCircle className='text-4xl justify-start cursor-pointer text-blue-200'></FaUserCircle>
            {/* icons */}
            <div className="group-icons flex gap-4">
              <FaUserFriends className='text-3xl cursor-pointer text-green-600'></FaUserFriends>
              <FaStackExchange className='text-3xl cursor-pointer text-green-600'></FaStackExchange>
              <FaFacebookMessenger className='text-3xl cursor-pointer text-green-600'></FaFacebookMessenger>
            </div>
          </div>
          {/* searchBar */}
          <div className="searchBar bg-slate-400 w-full   items-center relative h-28">
            <input type="text" placeholder='search or start new chat' className='bg-white mt-12 rounded w-1/2 h-12  ' />
          </div>
          {/* border-line */}
          <div className='border-line border-2 border-black  w-full'>
          </div>

          {/* chats */}
          <div className="chats flex justify-between">
            {/* userOne */}
            <div className="flex gap-4">
              <FaUserCircle className='text-6xl mt-4 justify-start cursor-pointer text-slate-200'></FaUserCircle>

              <div className="text grid cursor-pointer ">
                <h2 className='mt-4'> OBA</h2>
                <p>Una last dance</p>
              </div>

            </div>

            <p className='mt-4 text-md text-slate-300'>Yesterday</p>

          </div>

          {/* chats */}
          <div className="chats flex justify-between">
            {/* userTwo */}
            <div className="flex gap-4">
              <FaUserCircle className='text-6xl mt-4 justify-start cursor-pointer text-slate-200'></FaUserCircle>

              <div className="text grid cursor-pointer ">
                <h2 className='mt-4'>Kc</h2>
                <p>my boss</p>
              </div>

            </div>

            <p className='mt-4 text-md text-slate-300'>Yesterday</p>

          </div>


          {/* chats */}
          <div className="chats flex justify-between">
            {/* userThree */}
            <div className="flex gap-4">
              <FaUserCircle className='text-6xl mt-4 justify-start cursor-pointer text-slate-200'></FaUserCircle>

              <div className="text grid cursor-pointer ">
                <h2 className='mt-4'>Jun Bro</h2>
                <p>Did you log in</p>
              </div>

            </div>

            <p className='mt-4 text-md text-slate-300'>Yesterday</p>

          </div>

          {/* chats */}
          <div className="chats flex justify-between">
            {/* userFourr */}
            <div className="flex gap-4">
              <FaUserCircle className='text-6xl mt-4 justify-start cursor-pointer text-slate-200'></FaUserCircle>

              <div className="text grid cursor-pointer ">
                <h2 className='mt-4'>Agape</h2>
                <p>Howdy?</p>
              </div>

            </div>

            <p className='mt-4 text-md text-slate-300'>Yesterday</p>

          </div>




          {/* chats */}
          <div className="chats flex justify-between">
            {/* userFive */}
            <div className="flex gap-4">
              <FaUserCircle className='text-6xl mt-4 justify-start cursor-pointer text-slate-200'></FaUserCircle>

              <div className="text grid cursor-pointer ">
                <h2 className='mt-4'>Precious</h2>
                <p>Miss You</p>
              </div>

            </div>

            <p className='mt-4 text-md text-slate-300'>Yesterday</p>

          </div>

          {/* chats */}
          <div className="chats flex justify-between">
            {/* userSix */}
            <div className="flex gap-4">
              <FaUserCircle className='text-6xl mt-4 justify-start cursor-pointer text-slate-200'></FaUserCircle>

              <div className="text grid cursor-pointer ">
                <h2 className='mt-4'>kj</h2>
                <p>sup?</p>
              </div>

            </div>

            <p className='mt-4 text-md text-slate-300'>Yesterday</p>

          </div>
        </div>




        <div className="chatBox w-full h-full bg-slate-400 ">


          <div className="profile bg-slate-100 h-30 flex gap-4  items-center py-8 px-8">
            <FaUserCircle className='text-4xl justify-start cursor-pointer text-blue-200'></FaUserCircle>
            {/* person who you are chatting with */}
            <h2 className=''>Precious</h2>
          </div>

          {/* textbox */}
          <div className='bg-slate-100 flex  translate-y-28 justify-between mt-96'>
            <input type="text" placeholder='Type a Message ' className='bg-slate-700 text-white rounded w-full  h-16 text-align' />
            <FaArrowCircleRight className='text-3xl  cursor-pointer  text-slate-400  mt-4'></FaArrowCircleRight></div>
        </div>



      </div>




    </div>


  )
}

export default App
