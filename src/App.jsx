  
//1.the codes that are given below for realtime database


// import './App.css'
// import { getDatabase ,ref ,set} from "firebase/database";
// import {app} from './firebase'
 
// const db = getDatabase();
// function App() {

//   function writeUserData() {
    
//     set(ref(db, 'users/Raman' ), {
//       name:"Raman Singh Chauhan",
//       id : 10,
//       phonenumber:124324432,
//       email: 'abc@gmail.com'

      
//     });
//   }



//   return (
//    <div>
//     <h1>This web-app is for Firebase testing</h1>
//     <button onClick={writeUserData}>Give me your info</button>
//    </div>
//   )
// }

// export default App
    


//2.the codes that are given below for Authentication



import './App.css';
import {app} from './firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth() 


import React from 'react'

function App() {

function Signup() {
  
  createUserWithEmailAndPassword(auth,'RaRaftar@gmail.com', 'yoyobro')
    .then((userCredential) => {
console.log(userCredential);
      
    })
    .catch((error) => {
      console.log(error);
      });  }
  
 




  return (
    <div>

      <button onClick={Signup}>CreateEmail</button>
      
    </div>
  )
}

export default App
