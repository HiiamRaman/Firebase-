import React from 'react';
import { useState } from 'react';
import {app} from './firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth()
  






function Login() {


    
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");   

function Loginn(){
      
    signInWithEmailAndPassword(auth, email, password)
    .then(() => { 
      console.log("LOGIN SUCESSFUL!!!!");
     
    })
    .catch((error) => {
      console.log("Something Went Wrong ", error);
    });  
}
    

  function handlemail(event){
    setEmail(event.target.value);

}
function  handlepass(event){
    setPassword(event.target.value);

}   
  

  return (
    <div>
      <h1>Raman's Login will be available soon</h1>
<div>
<label >   Email: </label>  
<input   onChange={handlemail} type="email"  placeholder='Enter Your Email Here' required value={email}/>

<label >   Password: </label>  
<input   onChange={handlepass}   type="password"  placeholder='Enter Your Password  Here' required value={password}/>

</div>
<button onClick={Loginn}>LOGIN HERE</button>

    </div>
  )
}

export default Login
