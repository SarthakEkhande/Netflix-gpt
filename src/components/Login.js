import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSigninForm,setisSigninForm]=useState(true)

  const togglesigninform=()=>{
    setisSigninForm(!isSigninForm)
  

  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='backgroundimage'/>
        </div>

        <form className='p-12 bg-black absolute w-3/12 my-32 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSigninForm ? "Sign In" : "Sign Up" }</h1>
        {!isSigninForm && <input type="text" placeholder='Enter Your Name' className='p-3 my-4 w-full bg-gray-700 rounded-sm'></input>}
        {!isSigninForm && <input type="number" placeholder='Enter Mobile No' className='p-3 my-4 w-full bg-gray-700 rounded-sm'></input>}
          <input type="text" placeholder='Email Address' className='p-3 my-4 w-full bg-gray-700 rounded-sm'></input>
          <input type="password" placeholder='password' className='p-3 my-4 w-full bg-gray-700 rounded-sm'></input>
          <button className='p-4 my-2 bg-red-700 rounded-lg w-full'>{isSigninForm ? "Sign In" : "Sign Up" }</button>
          
          <p className='relative left-14'>Forgot password?</p>
         {/* <div className='flex gap-2 py-8'>
         <input className='py-8 ' type="checkbox"></input><p>Remember Me</p>
         </div> */}
         <div className='flex gap-1 p-2'>
           <p onClick={togglesigninform} className='cursor-pointer  hover:border-b-2' >{isSigninForm ? "New to Netflix? Sign Up Now" : "Already a user Sign in Now" }</p>
         </div>
        
        </form>
        </div>
  )
}

export default Login