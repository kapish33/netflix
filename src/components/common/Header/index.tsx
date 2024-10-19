"use client";
import React, { useState } from "react";
import styles from "./Header.module.scss"; 
import Link from "next/link";
import { HeaderPaths, Home } from "@utils/paths";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href={Home.path} aria-label={Home["aria-label"]}>
          <b>{process.env.NEXT_PUBLIC_APP_NAME}</b>
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <ul>
          {HeaderPaths.map((path) => (
            <li className="p-2 pl-4" key={path.name}>
              <Link href={path.path} aria-label={path["aria-label"]}>
                {path.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger Button */}
      <div
        className={`${styles.openbtn} ${isOpen ? styles.active : ""}`} // Toggle 'active' class
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
        aria-label="Toggle Menu"
      >
        <div className={styles["openbtn-area"]}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
