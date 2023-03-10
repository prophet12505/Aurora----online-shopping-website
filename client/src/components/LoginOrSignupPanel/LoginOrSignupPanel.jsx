import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { loginAction,signupAction } from '../../actions/userActions';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { VERIFY_EMAIL } from '../../constants/actionTypes';
import "./LoginOrSignupPanel.css"
const LoginOrSignupPanel = () => {

const dispatch = useDispatch();
const navigate =useNavigate();
const messageStore=useSelector(state=>state.message);

 function handleLogin(){
    dispatch(loginAction(loginData));
 }
 function handleSignup(){
  if(document.getElementById("password-input").value!=document.getElementById("password-input-repeat").value)
  {
    document.getElementById("signup-message").style.display='block';
    document.getElementById("signup-message").innerHTML="The two passwords you typed do not match";
  }
  else
  {
    dispatch(signupAction(signupData));
  }
    
 }
 const [loginData,setLoginData]=useState({
    email:'',
    password:''
 })
 const [signupData,setSignupData]=useState({
    name:'',
    email:'',
    password:''
 })
 //hide message since the beginning
 useEffect(()=>{ 
  document.getElementById("signup-message").style.display='none';
 document.getElementById("login-message").style.display='none';
},[]);

function sendEmail(emailAdress){
console.log("email has been sent to:"+emailAdress);
}
// set sign up message 
 useEffect(()=>{
  if(messageStore){
    if(messageStore.operation==="SIGNUP"){
      console.log(messageStore);
      if(messageStore.message){
        document.getElementById("signup-message").style.display='block';
        document.getElementById("signup-message").innerHTML=messageStore.message;
        if(messageStore.operationSuccess){
          sendEmail(signupData.email);
        }
      }
  }
} 
 },[messageStore])

const currentUserStore= useSelector(state=>state.currentUser);
useEffect(()=>{
  console.log("currentUserStore");
  console.log(currentUserStore);
  if(currentUserStore){
    if(currentUserStore.loggedIn){
    navigate('/');
  }
  else{
    if(currentUserStore.loginErrorMsg){
      document.getElementById("login-message").style.display='block';
    document.getElementById("login-message").innerHTML=currentUserStore.loginErrorMsg;
    }
    
  }
} 
 },[currentUserStore])

  return (
    <div className="login-register-wrapper pt-40 pb-40">
    <div className="container">
      <div className="member-area-from-wrap">
        <div className="row">
          {/* Login Content Start */}
          <div className="col-lg-6">
            <div className="login-reg-form-wrap">
              <h2>Log In</h2>
              {/* <form action="/login" method="post"> */}
              <p id='login-message'>this is the message section</p>
                <div className="single-input-item">
                  <input type="email" name='email' placeholder="Your email" value={loginData.email} onChange={(e)=>setLoginData({...loginData,email:e.target.value})} required />
                </div>
                <div className="single-input-item">
                  <input type="password" placeholder="Enter your Password"  value={loginData.password} onChange={(e)=>setLoginData({...loginData,password:e.target.value})} required />
                </div>
                <div className="single-input-item">
                  <div className="login-reg-form-meta d-flex align-items-center justify-content-between">
                    <div className="remember-meta">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="rememberMe" />
                        <label className="custom-control-label" htmlFor="rememberMe">Remember Me</label>
                      </div>
                    </div>
                    <a href="#" className="forget-pwd">Forget Password?</a>
                  </div>
                </div>
                <div className="single-input-item">
                  <button className="btn btn__bg" onClick={handleLogin}>Login</button>
                </div>
              {/* </form> */}
            </div>
          </div>
          {/* Login Content End */}
          {/* Register Content Start */}
          <div className="col-lg-6">
            <div className="login-reg-form-wrap sign-up-form">
              <h2>Sign up </h2>
              {/* <form action="#" method="post"> */}
              {/* <form > */}
              <p id='signup-message'>this is the message section</p>
                <div className="single-input-item">
                  <input type="text" placeholder="Enter your Username" value={signupData.name} onChange={(e)=>{setSignupData({...signupData,name:e.target.value})}}  required/>
                </div>
                <div className="single-input-item">
                  <input type="email" placeholder="Enter your Email" value={signupData.email} onChange={(e)=>{setSignupData({...signupData,email:e.target.value})}} required />
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="single-input-item">
                      <input id="password-input" type="password" placeholder="Enter your Password" value={signupData.password} onChange={(e)=>{setSignupData({...signupData,password:e.target.value})}} required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-input-item">
                      <input id="password-input-repeat" type="password" placeholder="Repeat your Password" required />
                    </div>
                  </div>
                </div>
                <div className="single-input-item">
                  <div className="login-reg-form-meta">
                    <div className="remember-meta">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="subnewsletter" />
                        <label className="custom-control-label" htmlFor="subnewsletter">Subscribe
                          Our Newsletter</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-input-item">
                  <button className="btn btn__bg" onClick={handleSignup}>Register</button>
                </div>
              {/* </form> */}
            </div>
          </div>
          {/* Register Content End */}
        </div>
      </div>
    </div>
  </div>

  )
}

export default LoginOrSignupPanel