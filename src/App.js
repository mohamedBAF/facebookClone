import React,{useEffect} from 'react';
import {Route,useHistory,useParams} from 'react-router-dom'
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed'
import Widget from './Widget'
import Login from './Login';
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function App() {
  const [{user,token},dispatch] = useStateValue();
  const userr=JSON.parse(localStorage.getItem("User"))



useEffect(() => {
  if(userr){ 
  dispatch({type:actionTypes.SET_USER,user:user})
  //  history.push('/')
   return <>
   <Header/>
   <div className="App_body">
   <Sidebar/>
   <Feed/>
   <Widget/>
   
   
</div>
</>
}else{
  return(<Login/>)
  
}
}, [])


  return (
    <div className="App">
      {!user ?(
       <Login/>
      ) : (
        <>
    <Header/>
    <div className="App_body">
    <Sidebar/>
    <Feed/>
    <Widget/>
    
    
</div>
</>

)}
    </div>
  );
}

export default App;
