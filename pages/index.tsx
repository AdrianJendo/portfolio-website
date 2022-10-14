import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Fri
// ctrl-f for good font
// Logo of website
// Use real projects / experiences
// mobile

// TODO:
// typewriter library
// Organization
// Experiences (with LOGOS) & Projects make prettier
// Embed Circle image of all the projects

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
        {/* Type Writer */}
        {/* <span className="tw"></span> */}
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

      <p className={styles.aboutText}>
        Nice to meet you, I&apos;m Adrian!
        <br />
        <br />
        I&apos;m an undergrad student at the University of Waterloo, studying
        Mechatronics Engineering (with specialization in Software Engineering).
        I have extensive work experience in both frontend & backend software
        development. I am passionate about building innovative software
        products, optimizing workflows and CI/CD pipelines, and working with
        financial technology and blockchain.
        <br />
        <br />I love learning about software design and applying what I learn to
        my own projects. Through past internships and school activities, I have
        gained a lot of industry experience as a Software Engineer. I am
        currently interning at{" "}
        <a
          className="abouta"
          style={{ color: "rgb(229, 238, 242)", fontWeight: 700 }}
          href="https://carta.com/"
          rel="noreferrer"
          target="_blank"
        >
          Carta
        </a>
        , and I have previously worked at{" "}
        <a
          className="abouta"
          style={{ color: "rgb(81, 178, 63)", fontWeight: 700 }}
          href="https://www.td.com/ca/en/asset-management/"
          rel="noreferrer"
          target="_blank"
        >
          TD Asset Management
        </a>
        ,{" "}
        <a
          className="abouta"
          style={{ color: "rgb(171, 35, 31)", fontWeight: 700 }}
          href="https://www.piinpoint.com/"
          rel="noreferrer"
          target="_blank"
        >
          PiinPoint
        </a>
        , and{" "}
        <a
          className="abouta"
          style={{ color: "rgb(34, 34, 147)", fontWeight: 700 }}
          href="https://www.cytel.com/"
          rel="noreferrer"
          target="_blank"
        >
          Cytel
        </a>
        . <br />
        <br />
        I&apos;m also a huge fitness enthusiast who loves working out, skiing,
        and playing soccer and volleyball. When I&apos;m not locked in my room
        coding or studying for exams, I also enjoy being outside, cooking,
        watching movies, doing escape rooms, and listening to music.
        <br />
        <br />
        I&apos;m currently exploring Summer 2023 internship opportunities.{" "}
        <a href="mailto:ajendo@uwaterloo.ca">
          <span>Get in touch</span>
        </a>
        .
      </p>
    </div>
  );
};

export default Home;
