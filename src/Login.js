import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";

import { provider, auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((response) => {
        dispatch({ type: actionTypes.SET_USER, user: response.user });
      })
      .catch((e) => {
        console.error("ERROR:", e);
        alert(e);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://i.pcmag.com/imagery/reviews/07td46ju7p6lLVb0QGwc5VF-6..v_1569479844.jpg"
          alt=""
        />
        <h1>Sign in to Slack</h1>
        <p>ajitfawade.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
