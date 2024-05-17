import React from 'react';

function Header() {
  return (
    <header>
      <div id="title">
        <div id="icon">
          {/* Icon content */}
        </div>
        <div id="name">
          <span id="head_name">CyberDost</span>
        </div>
      </div>
      <div id="search_box">
        <i className="fas fa-search"></i>
        <span id='search_placeHolder'>Search</span>
      </div>
      <div id="buttons">
        <div id="login">Log In</div>
        <div id="register">Sign Up</div>
        <div className="helper">
          <i className="fas fa-user-plus"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
