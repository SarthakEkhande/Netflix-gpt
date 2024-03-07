import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
// import { FaUsersGear } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changelanguage } from '../utils/configSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { togglegptsearchView } from '../utils/GptSlice';
import { addUser, removeuser } from '../utils/userStore';



const Header = () => {
  const auth = getAuth();
  const navigate=useNavigate();
  const dispatch=useDispatch()

  const user=useSelector(store=>(store.user))
  const showgptsearch=useSelector(store=>store.gpt.showgptsearch)
  

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

const handlegptsearchclick=()=>{
  //Toggle my GPT search

  dispatch(togglegptsearchView())

}

const handlelangchange=(e)=>{
  // console.log(e.target.value);
  dispatch(changelanguage(e.target.value))
  
}

  
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row md:justify-between sm:justify-center">
    
        <img className="w-44 mx-auto md:mx-0" src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'/>
       
       { user && (<div className="flex p-2 justify-between">
       {showgptsearch && <select className='p-2 bg-gray-900 text-white m-2' onChange={handlelangchange}>
       {SUPPORTED_LANGUAGES.map(lang=>
        <option key={lang.identifire} value={lang.identifire}>{lang.name}</option>
       )}
         
         {/* <option value="hindi">Hindi</option>
         <option value="marathi">Marathi</option>
         <option value="spanish">Spanish</option> */}
       </select>}
          {/* <p className='text-5xl text-slate-50 bg-red-600 h-auto'><FaUsersGear /></p> */}
           <button className='py-2 px-4 mx-4 my-2 text-white bg-purple-800 rounded-md' onClick={handlegptsearchclick}>{showgptsearch ? "Homepage" : "GPT Search"}</button>
             <img className="hidden md:block w-12 h-12" src={user ?. photoURL} alt='usericon' />
            
           
          <button onClick={handleSignout} className='font-bold text-white'>(Signout)</button>

        </div>
        )}
    </div>
  )
}

export default Header