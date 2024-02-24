import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeuser } from '../utils/userStore'


const Body = () => {
    const dispatch=useDispatch();
    // const navigate=useNavigate()

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"browse",
            element:<Browse/>
        },
    ])

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayname,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayname:displayname,photoURL:photoURL})) 
              
             
              
            } else {
              // User is signed out
              dispatch(removeuser());
            }
          });

    },[])
  return (
      <div>
      <RouterProvider router={appRouter}>
          <Login/>
          <Browse/>
          
      </RouterProvider>
     </div>
   
  )
}

export default Body