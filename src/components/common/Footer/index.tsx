import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { FooterPaths } from "@utils/paths";

const Footer = () => {
  return (
    <footer className={styles.footer} aria-label="Footer" role="contentinfo">
      <div className={styles.container}>
        <p aria-live="polite">
          &copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_APP_NAME}.
          All rights reserved.
        </p>
        <nav aria-label="Footer Navigation">
          <ul className={styles.links}>
            {FooterPaths.map((path) => {
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
      </div>
    </footer>
  );
};

export default Footer;
