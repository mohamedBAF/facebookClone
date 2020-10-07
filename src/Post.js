import { Avatar } from "@material-ui/core";
import { ThumbDown, ThumbUp } from "@material-ui/icons";
import React, { forwardRef } from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import "./Post.css";
const Post= forwardRef(({ profilepic, image, username, timestamp, message }, ref) =>{
  return (
    <div ref={ref} className="post">
      <div className="post_top">
        <Avatar src={profilepic} className="post_avatar" />
        <div className="post_topInfo">
          <h3>{username}</h3>
          <p>
            {new Date(timestamp?.toDate()).toUTCString()}
          </p>
        </div>
      </div>

      <div className="post_bottom">
        <p>{message}</p>
      </div>
      <div className="post_image">
          <img className={image ? "post_image_imgs" :  "post_image_img"} src={image} alt=""/>
      </div>

      <div className="post_options">

      <div className="post_option">
<ThumbUpIcon/>
<p>Like</p>
      </div>
      <div className="post_option">
<ChatBubbleOutlineIcon/>
<p>Coment</p>
      </div>
      <div className="post_option">
<NearMeIcon/>
<p>Share</p>
      </div>
      <div className="post_option">
<AccountCircleIcon/>
<ExpandMoreOutlinedIcon/>
      </div>
      </div>
    </div>
  );
})

export default Post;
