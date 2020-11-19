import React from "react";
import StoryReel from "./StoryReel";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";

export default function Feed() {
  return (
    <div className="feed">
      <StoryReel></StoryReel>
      <MessageSender></MessageSender>
      <Post
        profilePic="https://avatars1.githubusercontent.com/u/74244121?s=460&u=4f160ff15923d40838e26a657243921744e89c24&v=4"
        message="Mantep Bnaget"
        timestamp="wayahe wayahe"
        username="ave shina"
        image="https://inspgr.id/app/uploads/2019/12/art-bruno-pontiroli-01-805x1004.jpg"
      ></Post>
    </div>
  );
}
