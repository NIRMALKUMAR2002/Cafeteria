import React from 'react';
import "../../Components/Footer/footer.css";
import footerimg from "../../Assets/footerimg.png";
import qubelogo from "../../Assets/qubelogo.png";
const footer = () => {
  return (
    <div>
      <div className="entirefooter container-fluid">
        
        <div className="footercontent">
          <div className="row footerdetails">
            <div className="col-lg-7"><img src={footerimg} alt="" /></div>

            
            <div className="col-lg-5 contents">
              <h5>How can we help you ?</h5>
              <p>We'd love to hear your thoughts on your experience at our cafeteria</p>
              <form action="">
                <input type="text" placeholder='Name'/>
                
                <input type="number" placeholder='Phone'/>
                <input type="mail" placeholder="Email " />
               <textarea name="Message" placeholder="Message" id=""></textarea> 
                <a href="#"><button>Submit</button></a>
              </form>
            </div>
          </div>
        </div>
         
      </div>
    </div>
  )
}

export default footer
