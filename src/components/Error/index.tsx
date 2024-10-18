"use client";
import React from 'react';
import styles from './Error.module.scss'; 
import Link from 'next/link';
import { Home } from '@utils/paths';

interface ErrorProps {
  message?: string; // Optional custom message prop
}

const Error: React.FC<ErrorProps> = ({ message = "Oops! Something went wrong." }) => {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.errorMessage}>{message}</p>
      <Link href={Home.path} airea-label={Home['aria-label']} className={styles.homeLink}>
        Go back to Home
      </Link>
    </div>
  );
};

export default Error;
