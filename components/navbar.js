import Link from "next/link";
import React, { useState } from "react";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <header>
      <nav>
        {MENU_LIST.map(({ text, href }) => {
          return (
            <div>
              <a href={href}>{text}</a>
            </div>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
