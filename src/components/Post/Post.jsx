import "./Post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
// import Comments from "../comments/Comments";
import { useState } from "react";

const Post = ({post}) => {

  const liked=false

  return (
    <div className='post'>
      <div className='user'>
        <div className="userInfo">
          <img src={post.img}/>
          <div className="details">
            <Link to={`/profile/${post.userID}`} style={{textDecoration:"none", color:"inherit"}}>
              <span>{post.name}</span>
              <span className="date">1 min ago</span>
            </Link>
          </div>
        </div>
        <MoreHorizIcon/>
        
      </div>
      <div className='content'>
        <p>{post.desc}</p>
        <img src={post.img} />
      </div>

      <div className='info'>
        <div className="item">
          {liked ? <FavoriteBorderOutlinedIcon/> : <FavoriteOutlinedIcon/>}
        </div>
      </div>
    </div>
  )
}

export default Post
