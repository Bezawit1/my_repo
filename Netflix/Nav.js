import React, {useState,useEffect}from 'react';
import './Nav.css'

function Nav() {
  const[show,handleShow]=useState(false);//gave initial value false for show
  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 100){
        handleShow(true)
      }
      else{
        handleShow(false);
      } 
       });

       return () =>{
        window.removeEventListener("scroll");
       }
  },[]);

  // when show is true add class name nav black
  return (
     <div className={`nav${show &&"nav__black"}`}>  
    <img className="nav__logo"
    src="https://th.bing.com/th/id/R.699f0423fa5828ce8b019f56db48de62?rik=tbXML%2fVqf5vUFw&pid=ImgRaw&r=0"
      alt="Netflix Logo"

/>   
<img 
className="nav__avatar" 
src="https://th.bing.com/th/id/OIP.i2HBuWmNU78kbh4kUkDr7gAAAA?pid=ImgDet&w=320&h=320&rs=1"  
alt="avatar"
/>


</div>

)
};

export default Nav;
