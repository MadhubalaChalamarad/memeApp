import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firbase";
import SignUp from "./pages/SignUp";

// const auth = getAuth(app);

function App() {
  // const singleUser = () => {
  //   createUserWithEmailAndPassword(
  //     auth,
  //     "madhubala.chalamarad@isteer.com",
  //     "madhu@123"
  //   ).then((value) => console.log(value));
  // };
  return (
    <div className="App">
      {/* <h1>Firebase React App</h1>
      <button onClick={singleUser}>Put data</button> */}
      <SignUp />
    </div>
  );
}

export default App;
