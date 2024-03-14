import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header absolute top-0 left-0 w-full flex justify-between items-center px-10 py-4 text-black">
      <div className="logo font-generalsans font-black text-6xl">jle</div>
      <nav className="flex gap-8 items-center font-satoshi font-medium text-3xl">
        <a href="/about" className="nav-link">
          about
        </a>
        <a href="/services" className="nav-link">
          services
        </a>
        <a href="/projects" className="nav-link">
          projects
        </a>
        <a
          href="/contact"
          className="bg-color-primary text-white px-7 py-4 rounded-full"
        >
          Let's Talk.
        </a>
      </nav>
    </header>
  );
};

export default Header;
