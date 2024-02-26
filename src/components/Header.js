import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
// import { FaUsersGear } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeuser } from '../utils/userStore';



const Header = () => {
  const auth = getAuth();
  const navigate=useNavigate();
  const dispatch=useDispatch()

  const user=useSelector(store=>(store.user))

  const handleSignout = () => {
    signOut(auth)
      .then(() => {   
      })
      .catch((error) => {
        navigate('/error');
      });
  };

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayname,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayname:displayname,photoURL:photoURL})) 
          
         navigate("/browse")
          
        } else {
          // User is signed out
          dispatch(removeuser());
          navigate("/")
        }
      });

      //unsubscribe when component unmount
      return ()=> unsubscribe()


},[])

  
  return (
    <div className='absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10 '>
    
        <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'/>
       
       { user && (<div className='flex p-2 text-xl'>
          {/* <p className='text-5xl text-slate-50 bg-red-600 h-auto'><FaUsersGear /></p> */}
         
             <img className='w-12 h-12' src={user ?. photoURL} alt='usericon' />
            

          <button onClick={handleSignout} className='font-bold text-white'>(Signout)</button>
        </div>
        )}
    </div>
  )
}

export default Header