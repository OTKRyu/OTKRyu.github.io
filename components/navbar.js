import Link from "next/link";
import React, { useState } from "react";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Posts", href: "/posts" },
];

const Navbar = () => {
  return (
    <header>
      <nav>
        {MENU_LIST.map(({ text, href }) => {
          return (
            <div key={text}>
              <a href={href}>{text}</a>
            </div>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
