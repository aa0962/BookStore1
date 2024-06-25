// import React from 'react'
// import Cards from './Cards'
// import list from "../../public/list.json"
// import { Link } from 'react-router-dom'

// function Course() {
//   return (
//     <>    
//     <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
//       <div className='mt-28 items-center justify-center text-center'>
//         <h1 className='text-4xl md:text-4x1'>We're delighted to have you <span className='text-pink-500'>Here! :)</span>
//         </h1>
//         <p className="mt-12 ">
//         Welcome to our bookstore, where every page holds a new adventure and every shelf whispers tales of imagination. Discover literary treasures that inspire, educate, and enchant. Whether you seek classics that stand the test of time or the latest bestsellers, our curated collection awaits your exploration. Join us in celebrating the joy of reading and finding your next great escape at our cozy haven of books.
//         </p>
//         <Link to='/'>
//         <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 '>
//         Back
//         </button>
//         </Link>
//       </div>

//       <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
//         {
//           list.map((item)=>(
//             <Cards key={item.id} item={item}/>
//           ))
//         }
//       </div>




//     </div>
//   </>

//   )
// }

// export default Course

// // <h1 className='text-4xl md:text-4x1'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>text-4x1 2x1 se 4x1 liya hai

import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>    
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-4xl  md:text-4xl dark:text-white'>
            We're delighted to have you <span className='text-pink-500'>Here! :)</span>
          </h1>
          <p className="mt-12 dark:text-gray-300">
            Welcome to our bookstore, where every page holds a new adventure and every shelf whispers tales of imagination. Discover literary treasures that inspire, educate, and enchant. Whether you seek classics that stand the test of time or the latest bestsellers, our curated collection awaits your exploration. Join us in celebrating the joy of reading and finding your next great escape at our cozy haven of books.
          </p>
          <Link to='/'>
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 dark:hover:bg-pink-900 duration-300'>
              Back
            </button>
          </Link>
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
