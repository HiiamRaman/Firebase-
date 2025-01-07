import { app } from "./firebase";
import React from "react";
import { useState } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

function Login() {
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
  function handleEmail(event){
    setEmail(event.target.value);

  }
  function handlepass(event){
    setPassword(event.target.value);
    
  }   
  function raman(){
    signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    alert("Login sucess!!!!")
   
  })
  .catch((error) => {
    console.log("error",error);
  });
  }


  return (
    <div>   <label >  Email </label>
         <input  onChange={handleEmail} type="email"  required value={email}  placeholder="Enter your mail" />

         <label  >  Password </label>
         <input  onChange={handlepass} type="password" required  value={password}  placeholder="Enter your password" />
   
   <div>
    <button onClick={ raman}>LOgin here </button>
   </div>
   
    </div>   

  )
}

export default Login
