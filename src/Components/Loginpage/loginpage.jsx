import React from "react";
import "../Loginpage/loginpage.css";
import { FaUser ,FaLock } from "react-icons/fa";

const loginpage = () => {
  return (
    <div>
    
        {/* loginform */} 
          <div className="Container1">
          <div className="loginpage">
            <div className="loginform">

         
          <form>

          {/* input-box */}
            <h1>LOGIN</h1>
            <div className="input-box">
              <label>Username</label>
              <input type="text" placeholder="enter your username"  required/>
              <FaUser className="icon" />
            </div>
            {/* input-box */}
            <div className="input-box">
              <label>Password</label>
              <input type="password" placeholder="enter your password" required />
              <FaLock className="icon" />
            </div>
            {/* loginbutton" */}
            <div className="loginbutton">
              <button type="submit ">Login</button>
            </div>
            {/* forgot */}
            <div className="forgot">
             
              <a href="/forgotpassword">forgot password?</a>

            </div>
            
            {/* signup */}
            <div className="signup">
              <p>Don't have an account ? <a href="/Sign"> Sign up</a></p>
            </div>
            
          </form>
          </div>
          </div>
          </div>
   
      </div>

  );
};

export default loginpage;

