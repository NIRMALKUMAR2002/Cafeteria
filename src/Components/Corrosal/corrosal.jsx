import React from 'react';
import "../../Components/Corrosal/corrosal.css";
import cafeteriaimg from "../../Assets/Corrosalbg.jpg";


const corrosal = () => {
  return (
    <div>
    
        <div className="corrosalpage">
          {/* landingpageimg */}
          <div className="landingpageimg">
          <img src={cafeteriaimg} alt="cafeteriaimg" />
          </div>

        {/* cpcontentrow */}
          <div class="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-6 corrosalpagecontent1" >
            <p> QUBE CAFETERIA</p>
          </div>
          <div className="col-lg-5">
          <div className="ms-5 corrosalpagecontent2">
            <h6>"Where every meal is made with love <br />and every bite feels like home."</h6>
            <p>"Delicious food, great vibes and unforgettable <br /> moments – that’s our recipe for happiness."</p>

            </div>
          </div>
          
          </div>
        </div>
      </div>
 
  )
}

export default corrosal
