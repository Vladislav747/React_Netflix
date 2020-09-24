import React, { useState, useEffect } from "react";

import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
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
