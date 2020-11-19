import { Avatar } from "@material-ui/core";
import React from "react";
import "./Story.css";

export default function Story({ image, profileSrc, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      {profileSrc && <Avatar src={profileSrc} className="story_avatar" />}
      <h4>{title}</h4>
    </div>
  );
}
