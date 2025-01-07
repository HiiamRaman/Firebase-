import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const auth = getAuth();
const provider = new GoogleAuthProvider();



function Googlelogin() {

    function Google() {     
        signInWithPopup(auth, provider)
  .then(() => 

alert("Login Suceed with Google")

).catch((error) => {
    console.log("Error",error);
  });
        
    }
  return (
    <div>
      <button onClick={Google}> Sign IN with GOOGLE</button>
    </div>
  )
}

export default Googlelogin
