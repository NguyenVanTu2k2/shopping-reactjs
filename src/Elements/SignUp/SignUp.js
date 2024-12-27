import "./SignUp.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faUser,faLock,faCircleUser } from '@fortawesome/free-solid-svg-icons' 
import React, { useEffect, useState } from "react";
import SignUpBth from "../../Session/SignUpBthSession.js"
import { useNavigate } from "react-router-dom";
const SignUp = () => {
const navigate= useNavigate();

const [name, setName]= useState("");
const [username, setUsername]= useState("");
const [email, setEmail]= useState("");
const [password, setPassword]= useState("");

  const state = {
    name:name,
    username:username,
    password: password,
    email: email,
  }

useEffect(()=>{
  state.name = name;
  state.username = username;
  state.password = password;
  state.email = email;

});

// async function  register()  {
//   const res = await axios.post('http://localhost:8000/sign-up',state);
//   if(res.status=== 200){
//  console.log("successfully")
//   }else{
//     console.log("error")
//   }
// }



async function logMovies() {
  try {
    
  
} catch (error) {
    
}
}


useEffect(()=>{
  
 logMovies();
},[]);

  return (
  <>

  { SignUpBth.getValue() === true && <> 
  <div className="SignUp-b"></div>
  <div className="SignUp">
  <div className="testbox">
  <h1 className="sign-up-title"> Registration</h1>
  <form className="sign-up-form"  >
  <label id="icon" for="name"> <FontAwesomeIcon icon={faEnvelope} /> </label>
  <input className="sign-up-input name" type="text" name="email"  placeholder="Email"  onChange={(e)=>{
       setEmail(e.target.value) ;
  }} required />

  <label id="icon" for="name"><FontAwesomeIcon icon={faUser} /></label>
  <input type="text" name="name" className="input-signup sign-up-input" placeholder="name" onChange={(e)=>{
       setName(e.target.value) ;
  }} required/>

  
  <label id="icon" for="name"><FontAwesomeIcon icon={faCircleUser} /></label>
  <input className="sign-up-input name" type="text" name="username"  placeholder="UserName" onChange={(e)=>{
       setUsername(e.target.value) ;
  }} required/>

  <label id="icon" for="name"><FontAwesomeIcon icon={faLock} /></label>
  <input className="input-pass sign-up-input" type="password" name="password" id="password" placeholder="Password" onChange={(e)=>{
       setPassword(e.target.value) ;
  }} required/>


   <div className="sign-up-p">By clicking Register, you agree on our <div href="#">terms and condition</div>.</div>
   {/* <button  class="button" onClick={register()} >Register</button>  */}
  </form>
  <button  onClick={()=>{ SignUpBth.setValue(false); navigate("/Home");console.log(state);}}> close</button>
</div>
</div>

   </> }
   
  </>);;
};

export default SignUp;