import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header flex justify-between items-center p-4 text-black">
      <div className="logo font-generalsans font-black text-4xl">jle</div>
      <nav className="flex gap-4 items-center">
        <a href="/about" className="nav-link">about</a>
        <a href="/services" className="nav-link">services</a>
        <a href="/projects" className="nav-link">projects</a>
        <a href="/contact" className="bg-color-primary text-white px-5 py-2 rounded-full">Let's Talk.</a>
      </nav>
    </header>
  );
};

export default Header;
