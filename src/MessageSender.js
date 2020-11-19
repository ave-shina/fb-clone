import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

export default function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar></Avatar>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messafeSender_input"
            placeholder={`What's on your mind`}
          ></input>
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image Url (Optional)"
          ></input>
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="messageSender_Option">
          <VideocamIcon style={{ color: "red" }}></VideocamIcon>
          <h3>Live Video</h3>
        </div>

        <div className="messageSender_Option">
          <PhotoLibraryIcon style={{ color: "green" }}></PhotoLibraryIcon>
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender_Option">
          <InsertEmoticonIcon style={{ color: "orange" }}></InsertEmoticonIcon>
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}
