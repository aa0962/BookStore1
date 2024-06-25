
// import React from 'react';

// function Cards({ item }) {
//   return (
//     <div className="mt-4 my-3 p-3"> {/* Increased max-width to max-w-md */}
//       <div className="card bg-base-100 w-full md:w-92 lg:w-100 max-w-full shadow-xl hover:scale-105 duration-200 ark:bg-slate-900 dark:text-white dark:border"> {/* Increased width for larger screens */}
//         <figure>
//           <img src={item.image} alt="Shoes" className="w-full h-auto" /> {/* Ensure image responsiveness */}
//         </figure>
//         <div className="card-body p-4"> {/* Added padding for better spacing */}
//           <h2 className="card-title text-lg font-semibold mb-2">
//             {item.name}
//             <div className="badge badge-secondary ml-2">{item.category}</div>
//           </h2>
//           <p className="text-sm text-gray-700 mb-2">{item.title}</p> {/* Adjusted text size */}
//           <div className="card-actions flex justify-between items-center">
//             <div className="badge badge-outline text-sm">${item.price}</div> {/* Adjusted badge size */}
//             <button className="cursor-pointer px-2 py-1 rounded-full hover:bg-pink-500 hover:text-white duration 200">Buy Now</button> {/* Adjusted button size */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;
import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

