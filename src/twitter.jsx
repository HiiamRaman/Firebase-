import React from 'react'

import { getAuth, signInWithPopup, TwitterAuthProvider } from "firebase/auth";

const auth = getAuth();
const provider = new TwitterAuthProvider();


function Twitter() {

    function twitterlogin(){
        signInWithPopup(auth, provider)
        .then(() => {
          alert("LOGIN SUCESS WITH TWITTER")
        }).catch((error) => {
          alert("Error Occured",error);
        });
    }
  return (
    <div>
      <button onClick={twitterlogin}>Login using Twitter</button>
    </div>
  )
}

export default Twitter
