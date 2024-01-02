import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

// TODO:
// Organize styling

const stringSplitter = (s: string) : string[] => {
  const splitter = new GraphemeSplitter();
  return splitter.splitGraphemes(s);
};

const Home: NextPage = () => {
  return (
    <div>
      <h1 className={styles.title}>
        {" "}
        Hello, {"I'm"} Adrian
      </h1>

      <h2 className={styles.subheading}>
        {"I'm "}
        <span style={{ display: "inline-block", height: "50px" }}>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              deleteSpeed: 20,
              delay: 100,
              // @ts-ignore
              stringSplitter,
              strings: [
                "a programmer. 💻",
                "a mechatronics engineer. 🤖",
                "a fitness enthusiast. 🏋️‍♂️",
                "a morning person. 🌤️",
                "an avid emoji user. 🫡🥳👀",
                "a burrito bowl enjoyer. 🥙",
              ],
            }}
          />
        </span>
      </h2>

      <div className={styles.photo}>
        <Image
          src="/Adrian.jpg"
          alt="Error"
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: "50%" }}
        />
      </div>

<div className={styles.aboutContainer}>
      <div className={styles.aboutText}>
        <p className={styles.aboutp}>
        Nice to meet you, I&apos;m Adrian!
        </p>
        <p className={styles.aboutp}>
        I&apos;m an undergrad student at the University of Waterloo, studying
        Mechatronics Engineering (with a specialization in computing).
        I am interested in full stack development, information retrieval, cloud computing, distributed systems, and financial technology.
        Through past internships and school activities, I have
        gained a lot of industry experience as a Software Engineer. I have
        previously interned at{" "}
        <a
          className={styles.abouta}
          style={{ color: "rgb(210, 238, 242)", fontWeight: 700 }}
          href="https://carta.com/"
          rel="noreferrer"
          target="_blank"
        >
          Carta
        </a>
        ,{" "}
        <a
          className={styles.abouta}
          style={{ color: "rgb(81, 178, 63)", fontWeight: 700 }}
          href="https://www.td.com/ca/en/asset-management/"
          rel="noreferrer"
          target="_blank"
        >
          TD Asset Management
        </a>
        ,{" "}
        <a
          className={styles.abouta}
          style={{ color: "rgb(171, 35, 31)", fontWeight: 700 }}
          href="https://www.piinpoint.com/"
          rel="noreferrer"
          target="_blank"
        >
          PiinPoint
        </a>
        , and{" "}
        <a
          className={styles.abouta}
          style={{ color: "rgb(58, 185, 237)", fontWeight: 700 }}
          href="https://www.cytel.com/"
          rel="noreferrer"
          target="_blank"
        >
          Cytel
        </a>.
        </p>
        <p className={styles.aboutp}>
        I&apos;m also a huge fitness enthusiast who loves working out, skiing,
        and playing soccer and volleyball. When I&apos;m not locked in my room
        coding or studying for exams, I also enjoy being outside, cooking,
        watching movies, doing escape rooms, and listening to music.
        </p>
        <p className={styles.aboutp}>
        I&apos;m currently exploring 2024 new grad opportunities.{" "}
        <a className={styles.abouta} href="mailto:ajendo@uwaterloo.ca">
          Get in touch
        </a>.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Home;
