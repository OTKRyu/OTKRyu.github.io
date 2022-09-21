import Link from "next/link";
import React from "react";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Posts", href: "/posts" },
  { text: "Tags", href: "/tags" },
  { text: "About", href: "/about" },
];

const Navbar = () => {
  return (
    <header>
      <nav>
        {MENU_LIST.map(({ text, href }) => {
          return (
            <div key={text}>
              <Link href={href}>
                <a>{text}</a>
              </Link>
            </div>
          );
        })}
      </nav>
      <hr></hr>
    </header>
  );
};

export default Navbar;
