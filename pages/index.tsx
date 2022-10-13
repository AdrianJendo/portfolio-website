import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//TODO:
// Fri
// projects page
// ctrl-f for good font

// Sat
// style that shit
// deploy that shit

// TODO:
// typewriter library
// Organization
// Experiences (with LOGOS) & Projects make prettier

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
          style={{borderRadius:"50%"}}
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
        have extensive work experience in both frontend & backend software developemnt. I am super passionate about building cool software products,
        optimizing workflows and CI/CD pipelines, and working with Financial Technology and Blockchain.
        <br />
        <br />I love to learn about Software design and patterns and apply
        them to my own projects. Through past internships and school activities, I have also gained a lot of industry experience as a Software Engineer. I am currently interning at{" "}
        <a
          className="abouta"
          style={{ color: "rgb(229, 238, 242)", fontWeight: 700 }}
          href="https://carta.com/"
        >
          Carta
        </a>
        , and I have previously interned at{" "}
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
