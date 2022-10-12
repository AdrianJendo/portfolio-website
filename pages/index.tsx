import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const greetings = [
  "Hello",
  "Hey",
  "Hi",
  "Bonjour",
  "Salut",
  "Część",
  "Witam",
  "Hola",
];

const Home: NextPage = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(
    () => setGreeting(greetings[Math.floor(Math.random() * greetings.length)]),
    []
  );

  return (
    <div>
      <h1 className={styles.title}>
        {" "}
        {greeting}, {"I'm"} Adrian
      </h1>

      <h2 className={styles.subheading}>
        {"I'm "} Cool
        {/* <span className="tw"></span> */}
      </h2>

      <Image src="/Adrian.jpg" alt="Error" width={400} height={300} />

      {/* <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
    </div>
  );
};

export default Home;
