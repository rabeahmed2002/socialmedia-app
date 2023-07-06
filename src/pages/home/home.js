import React from 'react'
import './home.scss'

import Stories from "../../components/Stories/Stories"
import Posts from "../../components/Posts/posts.jsx"



const home = () => {
  return (
    <div className='home'>
      <Stories/>
      <Posts/>

    </div>
  )
}

export default home
