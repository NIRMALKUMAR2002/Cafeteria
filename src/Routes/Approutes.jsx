import React from 'react';
import {BrowserRouter ,Routes ,Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Sign from "../Pages/Sign";
import Forgotpassword  from "../Pages/Forgotpassword";
import Contactdetails from "../Pages/Contactdetails";
import Menu from "../Pages/menu";


const Approutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Sign' element={<Sign/>}/>
            <Route path='/Forgotpassword' element={<Forgotpassword/>}/>
            <Route path='/Contactdetails' element={<Contactdetails/>}/>
            <Route path='/Menu' element={<Menu/>}/>
            
            
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default Approutes
