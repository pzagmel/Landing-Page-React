import React from "react";

const Footer = ({ text }) => {
  return (

        <div className="footer text-center bg-dark">
          <div className="card-body text-white ">
            <p className="footer-text">{text}</p>
          </div>
        </div>
   
  );
};

export default Footer;
