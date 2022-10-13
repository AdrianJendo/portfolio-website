import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
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

      <div style={{ alignContent: "center" }}>
        <Image
          className="center"
          src="/Adrian.jpg"
          alt="Error"
          width={400}
          height={300}
        />
      </div>

      <p className={styles.aboutText}>
        Nice to meet you, I&apos;m Adrian!
        <br />
        <br />
        I&apos;m and undergrad student at the University of Waterloo, studing
        Mechatronics Engineering (+ specialization in Software Engineering). I
        have experience working in both frontend & backend development. Some of
        areas that I am super passionate about include Software Engineering,
        DevOps, Financial Technology, and Blockchain.
        <br />
        <br />I love to learn about Software design and patterns and applying
        them to my own projects. Additionally, I have gained a lot of experience
        throughout internships and school teams. I am currently interning at{" "}
        <a
          className="abouta"
          style={{ color: "rgb(229, 238, 242)", fontWeight: 700 }}
          href="https://carta.com/"
        >
          Carta
        </a>
        . I have previously interned at{" "}
        <a
          className="abouta"
          style={{ color: "rgb(81, 178, 63)", fontWeight: 700 }}
          href="https://www.td.com/ca/en/asset-management/"
        >
          TD Asset Management
        </a>
        ,{" "}
        <a
          className="abouta"
          style={{ color: "rgb(171, 35, 31)", fontWeight: 700 }}
          href="https://www.piinpoint.com/"
        >
          PiinPoint
        </a>
        , and{" "}
        <a
          className="abouta"
          style={{ color: "rgb(34, 34, 147)", fontWeight: 700 }}
          href="https://www.cytel.com/"
        >
          Cytel
        </a>
        . <br />
        <br />
        I&apos;m also a huge fitness enthusiast who loves cooking, working out,
        skiing, and playing soccer and volleyball. When I&apos;m not locked in
        my room coding or studying for exams, I enjoy playing sports, cooking,
        watching movies, and listening to music.
        <br />
        <br />
        I&apos;m also currently exploring Summer 2023 internship opportunities.{" "}
        <a href="mailto:ajendo@uwaterloo.ca">
          <span>Get in touch</span>
        </a>
        .
      </p>
    </div>
  );
};

export default Home;
