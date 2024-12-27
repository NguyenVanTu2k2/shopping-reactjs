import React, { useState } from "react";
import "./SignIn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import SignInBth from "../../Session/SignInBthSession";
import { useNavigate } from "react-router-dom";

import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import {
  setNotificationLogin,
  setNotificationSignInError,
} from "../../Store/NotificationSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const cookies = new Cookies();
  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `/api/user/post/signIn/${username}/${password}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
        if(data.error !== "Not Found") {
          cookies.set("session_id", data.id, { path: "/" });
          cookies.set("username", username, { path: "/" });
        }  
    } catch (error) {
      
    }
  };

  const handleClick = async () => {
    await handleSubmit();
    if (cookies.get("session_id") === undefined) {
      dispatch(setNotificationSignInError());
      navigate("/Home");
      cookies.remove("session_id");
    } else {
      dispatch(setNotificationLogin());
      navigate("/Home");
      SignInBth.setValue(false);
    }
  };
  window.scrollTo(0,0);
  return (
    <>
    
      {SignInBth.getValue() === true && (
        <>
          <div className="SignUp-b"></div>
          <div className="SignUp">
            <div className="testbox-signIn">
              <h1 className="sign-up-title"> Đăng nhập</h1>
              <div className="sign-up-form">
                <div id="icon">
                  <FontAwesomeIcon icon={faEnvelope} />{" "}
                </div>
                <input
                  className="sign-up-input"
                  type="text"
                  placeholder="Email"
                  required
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
                <div id="icon">
                  <FontAwesomeIcon icon={faCircleUser} />
                </div>
                <input
                  className="sign-up-input"
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <div className="sign-up-p">
                  By clicking Register, you agree on our
                  <div href="#">terms and condition</div>.
                  <input type="checkbox"></input> Remember
                </div>

                <button
                  className="button"
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Sign In
                </button>
              </div>
              <button className="button closeButton"
                onClick={() => {
                  SignInBth.setValue(false);
                  navigate("/Home");
                }}
              >
                close
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SignIn;
