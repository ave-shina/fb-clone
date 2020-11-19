import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

export default function Post({
  profilePic,
  image,
  username,
  timestamp,
  message,
}) {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={profilePic} className="post_avatar" />
        <div className="post_topInfo">
          <h3>{username}</h3>
          <p>{timestamp}</p>
        </div>
      </div>
      <div className="post_bottom">
        <p>{message}</p>
      </div>

      <div className="post_image">
        <img src={image} alt=""></img>
      </div>

      <div className="post_option">
        <div className="post_option">
          <ThumbUpIcon></ThumbUpIcon>
        </div>
      </div>
    </div>
  );
}
