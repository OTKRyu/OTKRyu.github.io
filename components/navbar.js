import Link from "next/link";
import React from "react";

import styles from "./navbar.module.css";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Posts", href: "/posts" },
];

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navList}>
        {MENU_LIST.map(({ text, href }) => {
          return (
            <div key={text}>
              <Link href={href}>
                <a className={styles.navItem}>{text}</a>
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
