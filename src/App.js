// import './App.css';
import Login from './pages/login/Login'
import Signup from './pages/signup/signup.js'
import leftBar from "./components/leftBar/leftBar" 
import Navbar from "./components/navBar/NavBar" 
import rightBar from "./components/rightBar/rightBar" 
import Home from './pages/home/home'
import Profile from "./pages/profile/profile" 

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Navigate
} from 'react-router-dom'


function App() {

  const currentUser=true;

  const Layout=()=>{
    return(
      <div>
        <Navbar/>

        <div style={{display: "flex"}}>
          <leftBar/>
          <Outlet/>
          <rightBar/>
        </div>

      </div>
    )
  }

  const ProtectedRoute=({children})=>{
    if (!currentUser) {
      return <Navigate to='/login'/>
    }

    return children
  }

  const router=createBrowserRouter([
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
    <div classNameName="App">

      <RouterProvider router={router}/>

      
    </div>
  );
}

export default App;
