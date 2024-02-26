import Browse from './Browse'
import Login from './Login'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
// import { onAuthStateChanged } from 'firebase/auth'
// import { auth } from '../utils/Firebase'
// import { useDispatch } from 'react-redux'
// import { addUser, removeuser } from '../utils/userStore'


const Body = () => {
  
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