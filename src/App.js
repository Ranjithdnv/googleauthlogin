import logo from "./logo.svg";
import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import jwtdecode from "jwt-decode";

function App() {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        var credentials = jwtdecode(credentialResponse.credential);
        console.log(credentials);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
}

export default App;
