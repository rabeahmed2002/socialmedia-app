import "./navbar.scss";
import React from 'react'
import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';



const navBar = () => {
  return (
    <div className='navbar'>

        <div className='left'></div>
            <Link to='/' style={{textDecoration:'none'}}>
                <span>ShadowNetwork</span>
            </Link>
            <HomeOutlinedIcon/>
            <DarkModeOutlinedIcon/>
            <AppsOutlinedIcon/>

            <div className='search'>
                <SearchOutlinedIcon/>
                <input type='text' placeholder='Search...'/>
            </div>
        <div className='right'>

            <PersonOutlineOutlinedIcon/>
            <MailOutlinedIcon/>
            <NotificationsNoneOutlinedIcon/>

            <div className='user'>
                <img src=''/>
                <span>Rabe</span>
            </div>

        </div>
      
    </div>
  )
}

export default navBar
