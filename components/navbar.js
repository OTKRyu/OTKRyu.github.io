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
    <nav className="bg-white flex justify-between border rounded my-3">
      <div className="p-2">OTKRyu</div>
      <div className="flex">
        {MENU_LIST.map(({ text, href }) => {
          return (
            <div key={text} className="p-2 hover:underline">
              <Link href={href}>
                <a>{text}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
