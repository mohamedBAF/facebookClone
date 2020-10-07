import React, { useState,useEffect } from "react";
import "./Feed.css";
import db from "./firebase";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import FlipMove from 'react-flip-move';



function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    ); 
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      
      
      <FlipMove enterAnimation="elevator" leaveAnimation="elevator">
        
     {posts.map(({id,data})=>(
      
         <Post 
         key={id}
         profilepic={data.profilepic}
         timestamp={data.timestamp}
         message={data.message}
         username={data.username}
         image={data.image}
         
         />
         
         ))}
         </FlipMove>
         
    </div>

  );
}

export default Feed;
