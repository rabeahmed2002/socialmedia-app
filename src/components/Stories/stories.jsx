import React, { useContext } from 'react'
import './stories.scss'

import { AuthContext } from "../../Context/authContext"


const Stories = () => {

    const {currentUser}=useContext(AuthContext)


  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Rabe Ahmed",
      img: "https://i.postimg.cc/6687L7Lj/IMG-20230621-WA0105.jpg",
    },
    {
      id: 2,
      name: "Rabe Ahmed",
      img: "https://i.postimg.cc/6687L7Lj/IMG-20230621-WA0105.jpg",
    },
    {
      id: 3,
      name: "Rabe Ahmed",
      img: "https://i.postimg.cc/6687L7Lj/IMG-20230621-WA0105.jpg",
    },
    {
      id: 4,
      name: "Rabe Ahmed",
      img: "https://i.postimg.cc/6687L7Lj/IMG-20230621-WA0105.jpg",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories
