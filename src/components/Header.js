import React from "react";
import headerbg from "../images/headerbg.jpg"
import "./Header.css"

const Header = () => {
  return (
    <>
      <div className="header_body">
        <img src={headerbg}  className="header_bg"/>
        <div className="btn_container"><a href="/database" className="btn" id="view_database">View Database</a></div>
      </div>
    </>
  );
};

export default Header;
