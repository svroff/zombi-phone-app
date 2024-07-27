import React from "react";

interface HeaderContent {
  logo: React.ReactNode;
  menu: React.ReactNode;
  contact: React.ReactNode;
}

interface HeaderProps {
  content: HeaderContent;
}

const Header: React.FC<HeaderProps> = ({ content }) => {
  return (
    <header className="flex justify-center gap-20 items-center p4 bg-lime-700 w-full">
      <div>{content.logo}</div>
      <nav>{content.menu}</nav>
      <div>{content.contact}</div>
    </header>
  );
};

export default Header;
