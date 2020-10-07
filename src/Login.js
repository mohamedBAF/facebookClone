import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
            type: actionTypes.SET_USER,
            user:result.user
})
console.log(result.user.refreshToken)
dispatch({
  type: actionTypes.SET_TOKEN,
  token:result.user.refreshToken
})
localStorage.setItem("User", JSON.stringify(result.user));

      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img src="https://img.pngio.com/filefacebook-f-logo-2019svg-wikipedia-facebook-query-language-png-1200_1200.png" />
        <img src="https://1000merken.com/wp-content/uploads/2020/04/Facebook-Logo.png" />
      </div>
      <button onClick={signIn}>Login with google</button>
    </div>
  );
}

export default Login;
