import React from 'react';
import Signup from "../../Components/Signup/signup.css";


const signup = () => {
  return (
    <div>
    
    
    {/* signupform */} 
      <div className="Container">
      <div className="signup">
        <div className="signupform">

     
      <form>

      {/* input-box */}
        <h1>SIGNUP</h1>
        <div className="input-box">
          <label>First Name</label>
          <input type="text" placeholder="enter your firstname"  required/>
 
        </div>
        {/* input-box */}
        <div className="input-box">
          <label>Last Name</label>
          <input type="text" placeholder="enter your lastname" required />
     
        </div>
         {/* input-box */}
         <div className="input-box">
          <label>Employee Id</label>
          <input type="text" placeholder="enter your emp id" required />
          
        </div>
        {/* input-box */}

          <div className="input-box">
          <label>Password</label>
          <input type="password" placeholder="enter your password" required />
          </div>
         {/* input-box */}
         <div className="input-box">
          <label>Confirm Password</label>
          <input type="password" placeholder="re-enter your password" required />
    
        </div>
        {/* signupbutton" */}
        <div className="signbutton">
          <button type="submit ">Sign up</button>
        </div>     
        {/* login */}
        <div className="signup">
          <p>Already have an account ? <a href="/Login"> Login</a></p>
        </div>
        
      </form>
      </div>
      </div>
      </div>
      </div>
      


      
  )
}

export default signup
