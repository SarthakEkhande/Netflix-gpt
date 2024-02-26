import React, { useRef, useState } from 'react'
import Header from './Header'
import { cheakvaliddata } from '../utils/Validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/Firebase';
import { USER_AVATAR } from '../utils/constants';

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userStore';

const Login = () => {

  const [isSigninForm,setisSigninForm]=useState(true)
  const [errormessage,seterrormessage]=useState()

  const dispatch=useDispatch()

//  const name=useRef(null)
  const email=useRef(null)
  const password=useRef(null)

  const HandleBtnClick=()=>{
    //validate the form data 

    console.log(email.current.value);
    console.log(password.current.value);
    

    const message = cheakvaliddata(email.current.value, password.current.value);

    console.log(message);
    seterrormessage(message)

    if(message) return

    //sign in/sign up logic
    if(!isSigninForm){
      //sign up logic goes here
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: email.current.value , photoURL:USER_AVATAR
    }).then(() => {
      // Profile updated!
      const {uid,email,displayname,photoURL} = auth.currentUser;
              dispatch(addUser({uid:uid,email:email,displayname:displayname,photoURL:photoURL})) 

    //  navigate("/browse")
    }).catch((error) => {
      // An error occurred
    seterrormessage(error.message)
    });

    console.log(user);
    // navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorMessage + " "+ errorCode)
    // ..
  });

    }
    else{
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  
    
 
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorMessage + " "+ errorCode)
  });
    }



    


  }

  const togglesigninform=()=>{
    setisSigninForm(!isSigninForm)
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='backgroundimage'/>
        </div>

        <form onSubmit={(e)=>e.preventDefault()} className='p-12 bg-black absolute w-3/12 my-32 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSigninForm ? "Sign In" : "Sign Up" }</h1>
        {!isSigninForm && <input  type="text" placeholder='Enter Your Name' className='p-3 my-4 w-full bg-gray-700 rounded-sm'></input>}
        {!isSigninForm && <input type="number" placeholder='Enter Mobile No' className='p-3 my-4 w-full bg-gray-700 rounded-sm'></input>}
          <input ref={email} type="text" placeholder='Email Address' className='p-3 my-4 w-full bg-gray-700 rounded-sm'></input>
          <input ref={password} type="password" placeholder='password' className='p-3 my-4 w-full bg-gray-700 rounded-sm'></input>
          <p className='text-red-700 font-bold text-lg p-2'>{errormessage}</p>
          <button onClick={HandleBtnClick} className='p-4 my-2 bg-red-700 rounded-lg w-full'>{isSigninForm ? "Sign In" : "Sign Up" }</button>
          
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