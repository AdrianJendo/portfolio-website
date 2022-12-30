import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Typewriter from "typewriter-effect";

// TODO:
// Organize styling
// Experiences (with LOGOS)

const greetings = ["Hello", "Hey", "Hi", "Bonjour", "Salut", "Część", "Hola"];

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
        {"I'm "}
        <span style={{ display: "inline-block", height: "50px" }}>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              // skipAddStyles:true,
              // cursorColor: '#C8ABC9',
              // typeColor: 'white',
              deleteSpeed: 20,
              delay: 100,
              // blinkSpeed: 200,
              // animateCursor: true,
              strings: [
                "a programmer. 💻",
                "a mechatronics engineer. 🤖",
                "a burrito bowl enjoyer. 🥙",
                "a fitness enthusiast. 🏋️‍♂️",
                "a morning person. 🌤️",
                "a pineapple on pizza lover. 🍍",
                "a Disney fanatic. 🏰",
                "an avid emoji user. 🫡🥳👀",
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
        gained a lot of industry experience as a Software Engineer. I have
        previously interned at{" "}
        <a
          className="abouta"
          style={{ color: "rgb(210, 238, 242)", fontWeight: 700 }}
          href="https://carta.com/"
          rel="noreferrer"
          target="_blank"
        >
          Carta
        </a>
        ,{" "}
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
          style={{ color: "rgb(58, 185, 237)", fontWeight: 700 }}
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
