import React, { useState } from "react";
import { app } from "../firbase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Success")
    );
  };

  return (
    <div>
      <label>Email</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />
      <label>password</label>
      <input
        type="password"
        required
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={createUser}>submit</button>
    </div>
  );
};

export default SignUp;
