import React from 'react';
import "../../Components/Forgot/forgot.css";

const forgot = () => {
  return (
    <div>
       {/* forgotform */} 
       <div className="Container3 ">
          <div className="forgotpage ">     
          <form>
             {/* input-box */}
            <h1>Forgot password</h1>
            <div className="input-box">
              <label>Username</label>
              <input type="text" placeholder="enter your username"  required/>
             
            </div>
             {/* input-box */}
            <div className="input-box">
            <label>Employee Id</label>
            <input type="text" placeholder="enter your employee id" required />

            </div>
              {/* input-box */}
              <div className="input-box">
              <label>Create new password</label>
              <input type="password" placeholder="enter your new password" required />

            </div>
            {/* input-box */}
            <div className="input-box">
              <label>Confirm Password</label>
              <input type="password" placeholder="re-enter your password" required />

            </div>
            {/* submitbutton" */}
            <div className="submitbutton">
              <button type="submit ">Submit</button>
            </div>
            
            
            {/* login */}
            <div className="login">
              <p>Password created successfully ! <a href="/login"> login</a></p>
            </div>
            
          </form>
          </div>
          </div>
          </div>
   
      

 
  )
}

export default forgot
