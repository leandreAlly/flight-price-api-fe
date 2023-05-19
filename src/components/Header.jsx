import React from "react";

const Header = () => {
  return (
    <header className='bg-dark text-white'>
      <div
        className='container'
        style={{ height: "60px", display: "flex", alignItems: "center" }}
      >
        <h1 className='text-center' style={{ fontSize: "1.5rem" }}>
          Welcome to our Flight Price App
        </h1>
      </div>
    </header>
  );
};

export default Header;
