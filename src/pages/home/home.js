import React from 'react'
import './home.scss'

import Stories from "../../components/Stories/Stories"
import Posts from "../../components/Posts/Posts.jsx"



const home = () => {
  return (
    <div className='home'>
      <Stories/>
      <Posts/>

    </div>
  )
}

export default home
