import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.app}>
      <Head>
        <title>Adrian Jendo</title>
        <meta name="description" content="Welcome to my website!" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <nav>
        {/* <div className="navbar-logo">Logo</div> */}
        <div className="navbar-logos">
          <a
            href="https://www.linkedin.com/in/adrian-jendo/"
            rel="noreferrer"
            target="_blank"
            className={styles.footerImg}
          >
            <Image alt="Linkedin" width={30} height={30} src="/linkedin.svg" />
          </a>
          <a
            href="https://github.com/adrianjendo"
            rel="noreferrer"
            target="_blank"
            className={styles.footerImg}
          >
            <Image alt="Github" width={30} height={30} src="/github.svg" />
          </a>
          <a
            href="https://www.instagram.com/adrian.jendo/"
            rel="noreferrer"
            target="_blank"
            className={styles.footerImg}
          >
            <Image
              alt="Instagram"
              width={30}
              height={30}
              src="/instagram.svg"
            />
          </a>
        </div>
        <ul className="navbar-links">
          {/* <li>
            <Link href="/about">
              <a className="nav-link">about</a>
            </Link>
          </li> */}
          <li>
            <Link href="/">
              <a className="nav-link">home</a>
            </Link>
          </li>
          <li>
            <Link href="/experience">
              <a className="nav-link">experience</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className="nav-link">projects</a>
            </Link>
          </li>
          <li>
            <Link href="mailto:ajendo@uwaterloo.ca">
              <a className="nav-link">contact</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.container}>{children}</div>

      {/* <div className={styles.footerContainer}>
        <a
          href="https://www.linkedin.com/in/adrian-jendo/"
          className={styles.footerImg}
        >
          <Image alt="Linkedin" width={30} height={30} src="/linkedin.svg" />
        </a>
        <a href="https://github.com/adrianjendo" className={styles.footerImg}>
          <Image alt="Github" width={30} height={30} src="/github.svg" />
        </a>
        <a
          href="https://www.instagram.com/adrian.jendo/"
          className={styles.footerImg}
        >
          <Image alt="Instagram" width={30} height={30} src="/instagram.svg" />
        </a>
      </div> */}
    </div>
  );
};

export default Layout;
