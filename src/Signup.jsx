import React from "react";
import { useState } from "react";
import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);

function Signup() {
  function Mail() {
    createUserWithEmailAndPassword(auth, email, password).then((value) => {
      alert("Signed in Sucessfully");
    });
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function setmail(event) {
    setEmail(event.target.value);
  }
  function handle(event) {

    setPassword(event.target.value);
  }

  return (
    <div>
      <div>
        <label>
          {" "}
          Enter your email:{" "}
          <input
            onChange={setmail}
            type="email"
            value={email}
            required
            placeholder="Enter your Mail"
          />
        </label>

        <div>  
          <label>
            {" "}
            Enter your password:{" "}
            <input
              onChange={handle}
              type="password"
              required
              value={password}
              placeholder="Enter Password"
            />
          </label>
        </div>

        <button onClick={Mail}>SignUP</button>
      </div>
    </div>
  );
}

export default Signup;
