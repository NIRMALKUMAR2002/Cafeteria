import React from "react";      
import "../../Components/Navbar/navbar.css";
import qubelogo from "../../Assets/qubelogo.png";

const navbar = () => {
  return (
    <div>
        {/* entirenavbar */}
        <div className="entirenavbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
       
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            {/* navlogoimg */}
            <div className="navlogoimg">
             <a href="https://www.qubecinema.com/"><img src={qubelogo} alt="" /></a>
            </div>
           {/* wholenavbar */}
          <div className="wholenavbar">
            <ul class="navbar-nav me-auto">
              <li class="home">
                <a class="nav-link active" aria-current="page" href="/"> HOME </a>
                </li>   
                <li class="  contactus">
               <a class="nav-link" href="#" aria-current="page" href="/Menu">MENU</a>
               </li>
               <li class="  contactus">
               <a class="nav-link" href="#" aria-current="page" href="/Contactdetails">CONTACT </a>
               </li>   
            </ul>
            </div>
          <div className="loginsignup">
          <p><a class="logsign" href="/Login" role="button">login/signup </a></p>
          </div>

          </div>
        </div>
      </nav>
      </div>
    </div>
  );
};

export default navbar;
