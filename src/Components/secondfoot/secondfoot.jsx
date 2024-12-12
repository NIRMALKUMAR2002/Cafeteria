import React from "react";
import "../../Components/secondfoot/secondfoot.css";
import qubelogo from "../../Assets/qubelogo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { LiaCopyrightSolid } from "react-icons/lia";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineFax } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { PiBuildingApartmentFill } from "react-icons/pi";


const secondfoot = () => {
  return (
    <div>
      <div className="footers">
        <div className="entiresecondfoot">
          <div className="row footer">
            
              {/* qube" */}
                <div className="col-lg-1"></div>
              <div className="col-lg-3 ">
                <div className="qube">
                  <img src={qubelogo} alt="" />
           
                </div>
              </div>

              {/* menu */}
              <div className="col-lg-2 menu">
   
                  <a target="_blank" href="https://www.qubecinema.com/about-us">
                    <MdOutlineKeyboardDoubleArrowRight />
                    About Us
                  </a>
                  <a target="_blank" href="/">
                    <MdOutlineKeyboardDoubleArrowRight />
                    Services
                  </a>
                  <a target="_blank" href="/Contactus">
                    <MdOutlineKeyboardDoubleArrowRight />
                    Contact
                  </a>
             
              </div>

              {/* info */}
              <div className="col-lg-3 info">
                <div className="address">
                  <p>
                    <i id="icon1"><FaBuilding />
                    </i>

                    No:42,Dr.Ranga Road,Mylapore,Chennai-600004,India</p>
                </div>
                <div className="phone">
                  <p>
                    {" "}
                    <FaPhone />
                    +91 (44) 4204-1505
                  </p>
                </div>
                <div className="fax">
                  <p>
                    <MdOutlineFax />
                    +91 (44) 4348-8881
                  </p>
                </div>
                <div className="mail">
                  <a href="info@qubecinema.com"><p>
                    <MdOutlineMarkEmailUnread />
                    info@qubecinema.com
                  </p></a>
                </div>
        
              </div>
              
              <div className="col-lg-2">
              <div className="para1">
                    <div className="para1content">
                    <h6>Follow us </h6>
                    </div>
               
                    <div className="icons">

                 
                    <div className="iconfacebook">
                      <span>
                        <a href="https://www.facebook.com/QubeCinema/about/">
                          <FaFacebookSquare />
                        </a>
                      </span>
                    </div>
                    <div className="iconlinkedin">
                      <span>
                        <a href="https://in.linkedin.com/company/qubecinema"><FaLinkedin />
                        </a>
                      </span>
                    </div>
                    <div className="iconinstagram">
                      <span>
                        <a href="https://www.instagram.com/qube.cinema/"><FaInstagram />
                        </a>
                      </span>
                    </div>

                  </div>

                  </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="underline">
                <p><hr /></p>
              </div>
              <p className="copyright">
                    Copyright <LiaCopyrightSolid />2024
                    <span className="spanpara">
                      <a href="https://www.qubecinema.com/"> QUBE CINEMA TECHNOLOGIES</a>
                    </span>
                    . All Rights Reserved.
                  </p>
              
            </div>
          </div>
        </div>
      </div>

  );
};

export default secondfoot;
