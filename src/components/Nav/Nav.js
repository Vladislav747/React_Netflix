import React, { useState, useEffect } from "react";

import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setShow(true)
      }else setShow(false);
    });
      return () => {
        window.removeEventListener("scroll");
      }
    }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="http://static.wixstatic.com/media/cbafe1_63c8e817ce56404193de0db66bc66418~mv2_d_1600_1600_s_2.png"
        alt="Netflix Logo"
      />
      {/* <img
        className="nav__avatar"
        src="http://static.wixstatic.com/media/cbafe1_63c8e817ce56404193de0db66bc66418~mv2_d_1600_1600_s_2.png"
        alt="Netflix Avatar"
      /> */}
    </div>
  );
}

export default Nav;
