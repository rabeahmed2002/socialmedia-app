import "./style.scss";
import Login from './pages/login/Login'
import Signup from './pages/signup/signup.js'
import LeftBar from "./components/LeftBar/LeftBar" 
import NavBar from './components/NavBar/NavBar'
import RightBar from "./components/RightBar/RightBar" 
import Home from './pages/home/home'
import Profile from "./pages/profile/profile" 

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import * as reactRouterDom from 'react-router-dom'
import { AuthContext } from "./Context/authContext";
import { useContext } from 'react'


function App() {

  const {currentUser}=useContext(AuthContext)

  const Layout=()=>{
    return(
      <div>
        <NavBar/>

        <div style={{display: "flex"}}>
          <LeftBar/>
          <div style={{flex:6}}>
            <Outlet/>
          </div>
          {/* <reactRouterDom.Outlet/> */}
          <RightBar/>
        </div>

      </div>
    )
  }

  const ProtectedRoute=({children})=>{
    if (!currentUser) {
      return <reactRouterDom.Navigate to='/login'/>
    }

    return children
  }

  const router=reactRouterDom.createBrowserRouter([
    {
      path:'/',
      element: <ProtectedRoute><Layout/></ProtectedRoute>,
      children: [
        {
          path:'/',
          element: <Home/>
        },
        {
          path:'/profile/:id',
          element: <Profile/>
        },
      ]
    },
    {
      path:'/login',
      element: <Login/>
    },
    {
      path:'/signup',
      element: <Signup/>
    },
  ])


  return (
    <div className="App">

      <reactRouterDom.RouterProvider router={router}/>

      
    </div>
  );
}

export default App;
