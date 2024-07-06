import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

function Signup() {
  const location=useLocation()
  const navigate=useNavigate()
  const from=location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data) =>{
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password,
    }
  await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('Signup Successfully');
        navigate(from,{replace:true})
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user));
    }).catch((err)=>{
      if(err.response){
        console.log(err)
        
        toast.error("Error:"+err.response.data.message);
      }

    })

  };
  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className="w-[600px]">
          <div className="modal-box bg-white dark:bg-gray-800 text-black dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            
            <h3 className="font-bold text-lg">Signup</h3>
            <div className='mt-4 space-y-2'>
              <span>Name</span>
              <br />
              <input 
                type='text'
                placeholder='Enter your Name'
                className="w-80 px-3 py-1 border rounded-md outline-none bg-white dark:bg-gray-700 text-black dark:text-white"
                {...register("fullname", { required: true })}
              />
               <br/>
               {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
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
              <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
              <p className='text-xl'>Have an account?
                <button 
                  className='underline text-blue-500 dark:text-blue-300 cursor-pointer'
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>{" "}
                <Login />
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
