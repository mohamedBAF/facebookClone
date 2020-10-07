import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from 'firebase'
function MessageSender() {
    const [{user}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (e) => {
    

db.collection('posts').add({
message:input,
timestamp:firebase.firestore.FieldValue.serverTimestamp(),
profilepic:user.photoURL,
username:user.displayName,
image:imageUrl,
})

e.preventDefault();

  };
  return (
    <div className="messagesender">
      <div className="messagesender_top">
        <Avatar src={user.photoURL}/>
        <form>
          <input
            className="messagesender_input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`what'S on your mind,${user.displayName} ?`}
          />
          <input 
           onChange={(e) => setImageUrl(e.target.value)}
          placeholder="image URL(Optional)"
          value={imageUrl}

          />
          <button type="submit" onClick={handleSubmit}>
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messagesender_bottom">
        <div className="messagesender_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messagesender_option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo Video</h3>
        </div>
        <div className="messagesender_option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
