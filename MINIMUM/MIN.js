import React from 'react';
import {useState } from 'react';

import './styles.css';



function Minimum() {
    const[values,setValues]=useState({
        firstLength:" ",
        secondLength:" ",
        firstQuantity:" ",
        secondQuantity:" ",


    });
    const[submitted,setSubmitted]=useState(false)
    const handlefirstLen=(event)=>{
        setValues({...values,firstLength:event.target.value})
        setfirstLen(event.target.value)
    }
    const handlefirstquan=(event)=>{
        setValues({...values,firstQuantity:event.target.value})
        setfirstquan(event.target.value)
    }
    const handlesecondLen=(event)=>{
        setValues({...values,secondLength:event.target.value})
        setsecondLen(event.target.value)
    }
    const handlesecondquan=(event)=>{
        setValues({...values,secondQuantity:event.target.value})
        setsecondquan(event.target.value)
    }
    var[firstlen,setfirstLen]=useState();
    var[firstquan,setfirstquan]=useState();
    var [secondlen,setsecondLen]=useState();
    var [secondquan,setsecondquan]=useState();

    const[total,setTotal]=useState();
    function calculation(){
        firstlen=Number(firstlen);
        secondlen=Number(secondlen);
        firstquan=Number( firstquan);
        secondquan=Number(secondquan);
        var firstresult=firstlen*firstquan;
        var secondresult=secondlen*secondquan;
        var thirdresult= (firstresult+secondresult)
        var fourthresult=thirdresult/12;
        var remainder=(firstresult+secondresult)%12;


        if(isNaN(firstlen)||isNaN(secondlen)||isNaN(firstquan)||isNaN(secondquan)){
            setTotal("All fields should be a number please enter a number");
         
        
          
        }
        else if(firstlen==""||secondlen==""||firstquan==""||secondquan==""){
            setTotal("All fields must be filled");
        }
        
        else{

            if(remainder==0){
                setTotal("Result will be:"+(fourthresult))
              
               }
               if(remainder!=0){
                   setTotal("Result will be:"+(Math.trunc(fourthresult+1)))
                 }
       
    
    }
}

 const handleSubmit=(event)=>{
     event.preventDefault();
    setSubmitted(true);
 }
  
      
   
      
    return (
       


<div className="hero">
<div className="form-container">
    <h2> length of rebar</h2>
    <form id="adder" action="#" onSubmit={handleSubmit}>
      <div className="form-values">
        <p>
          First length<br />
          <input 
          onChange={handlefirstLen}
          value={firstlen}type="text" name="first-value" placeholder="enter the first length" id="first" required/>
        </p>
        <p>
          First Quantity<br />
          <input 
           onChange={handlefirstquan}
          value={firstquan} type="text" name="second-value" placeholder="enter the first quantity" id="second" required/>
        </p>
        <p>
            Second length<br />
            <input  
             onChange={handlesecondLen}
             value={secondlen}type="text" name="first-value" placeholder="enter the second length" id="secondL" required/>
          </p>
          <p>
              Second Quantity<br />
              <input 
               onChange={handlesecondquan}value={secondquan} type="text" name="enter the second quantity" placeholder="First value" id="secondQ" required/>
            </p>
      </div>
      <br />
      <button id="submitButton" type="submit" onClick={calculation}>Calculate</button>
    </form>
    <br />
  {submitted?<div className="sum">{total}</div>:null}  

    <br />
    <hr />
    <br />
  </div>
 </div>
    )}
    export default Minimum;