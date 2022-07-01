import React from 'react';
import './main.css';
import avatar from "./images/avatar.png";
const Login = () => {
    return ( 
       <center>
      <div className="login">
          <div> </div>
          <h2 id=""> Admin form</h2>
          <div>
          <form method="post" className="login_form" name="loginAdmin" id="loginForm">
          <label id="errorEmail">E-mail  </label><br/>
          <input type="text" name="" placeholder="Email " class="input" id="email"  />
          <div class="error"></div><br/>
          <label id="errorPassword">Password </label><br/>
          <input type="password" name="password" placeholder="Enter Password" class="input" id="pass"  />
          <div class="error"></div><br/>
          <button className="input" id="signin1">SignIn</button><br/>
          <p>Don't have an Account? <a href="#"> Sign up now </a></p>
               </form>
          </div>
      </div>  
      </center> 
    );
}
 
export default Login;