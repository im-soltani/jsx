import React from 'react';
import './App.css';
import imagee from "./imageInSrc.jpg";
import "./style.css";
import video from "./react.mp4";

function App() {
  return (
    <div className="App">
      
      <div style={{border:'solid 1px black',maxWidth:"100vw"}} >  
 
       <h1 className="title red">Your name here</h1>  

        <br />  

        <img src={imagee} /> <br /> 

        <img src="/imageInPublic.jpg"/>  

    </div>  

     <video width="320" height="240" controls >  

     <source src={video} type="video/mp4" /> 

     </video>
     </div>
    
   
  );
}

export default App;
