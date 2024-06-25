// import React from 'react'
// import { Link } from 'react-router-dom'

// function Login() {
//   return (
//     <div>
//     <dialog id="my_modal_3" className="modal">
//         <div className="modal-box">
//         <form method="dialog">
//         {/* if there is a button in form, it will close the modal */}
//         <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//         </form>
//         <h3 className="font-bold text-lg">Login</h3>
//         <div className='mt-4 space-y-2 '>
//             <span >Email</span>
//             <br />
//             <input type='email'
//             placeholder='Enter your Email'
//             className="w-80 px-3 py-1 border rounded-md outline-none"/>
//         </div>
//         {/* password */}
//         <div className='mt-4 space-y-2'>
//             <span>Password</span>
//             <br />
//             <input type='text'
//             placeholder='Enter your Password'
//             className="w-80 px-3 py-1 border rounded-md outline-none"/>
//         </div>
//         {/*button */}
//         <div className='flex justify-around mt-4'>
//             <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
//             <p>Not Registered?
//               <Link to='/signup' className='underline text-blue-500 cursor-pointer'>
//                 Signup</Link>{" "}
//                 </p>
//         </div>
//         </div>
//     </dialog>
      
//     </div>
//   )
// }

// export default Login
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // This will log the form data to the console
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:bg-gray-800 text-black dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <h3 className="font-bold text-lg">Login</h3>
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input 
                type='email'
                placeholder='Enter your Email'
                className="w-80 px-3 py-1 border rounded-md outline-none bg-white dark:bg-gray-700 text-black dark:text-white"
                {...register("email", { required: true })}
              />
              <br/>
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input 
                type='password'
                placeholder='Enter your Password'
                className="w-80 px-3 py-1 border rounded-md outline-none bg-white dark:bg-gray-700 text-black dark:text-white"
                {...register("password", { required: true })}
              />
              <br/>
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='flex justify-around mt-4'>
              <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
              <p>Not Registered?
                <Link to='/signup' className='underline text-blue-500 dark:text-blue-300 cursor-pointer'>
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
