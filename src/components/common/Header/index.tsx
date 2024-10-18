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
      <div className={styles.logo}>
        <Link href={Home.path} aria-label={Home['aria-label']}><b>{process.env.NEXT_PUBLIC_APP_NAME}</b></Link>
      </div>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <ul>
          {HeaderPaths.map((path) => {
            return (
              <li key={path.name}>
                <Link href={path.path} aria-label={path["aria-label"]}>
                  {path.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div
        className={styles.hamburger}
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
        aria-label="Toggle Menu"
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </header>
  );
};

export default Header;
