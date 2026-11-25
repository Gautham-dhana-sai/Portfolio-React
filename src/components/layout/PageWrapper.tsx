import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import styles from './PageWrapper.module.css';

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
