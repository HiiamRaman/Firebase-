
import './App.css'
import { getDatabase ,ref ,set} from "firebase/database";
import {app} from './firebase'
 
const db = getDatabase();
function App() {

  function writeUserData() {
    
    set(ref(db, 'users/Raman' ), {
      name:"Raman Singh",
      id : 10,
      phonenumber:124324432,
      email: 'abc@gmail.com'

      
    });
  }
  




  return (
   <div>
    <h1>This web-app is for Firebase testing</h1>
    <button onClick={writeUserData}>Give me your info</button>
   </div>
  )
}

export default App
