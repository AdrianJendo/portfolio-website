import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutText}>
        <div className={styles.aboutHeader}>
          <h2>hello world!</h2>
          {/* <img className="cat-paw" src="assets/cat_paw_hi.gif" width="100" /> */}
        </div>
        <div className={styles.aboutBio}>
          <p>
            Nice to meet you, I&apos;m Adrian!
            <br />
            <br />
            I&apos;m and undergrad student at the University of Waterloo,
            studing Mechatronics Engineering (+ specialization in Software
            Engineering). I have experience working in both frontend & backend
            development. Some of areas that I am super passionate about include
            Software Engineering, DevOps, Financial Technology, and Blockchain.
            <br />
            <br />I love to learn about Software design and patterns and
            applying them to my own projects. Additionally, I have gained a lot
            of experience throughout internships and school teams. I am
            currently interning at
            <a className="carta" href="https://carta.com/">
              <span>Carta</span>
            </a>
            . I have previously interned at
            <a className="td" href="https://www.td.com/ca/en/asset-management/">
              <span>TD Asset Management</span>
            </a>
            ,
            <a className="piinpoint" href="https://www.piinpoint.com/">
              <span>PiinPoint</span>
            </a>
            , and
            <a className="cytel" href="https://www.cytel.com/">
              <span>Cytel</span>
            </a>
            . <br />
            <br />
            I&apos;m also a huge fitness enthusiast who loves cooking, working
            out, skiing, and playing soccer and volleyball. When I&apos;m not
            locked in my room coding or studying for exams, I enjoy playing
            sports, cooking, watching movies, and listening to music.
            <br />
            <br />
            I&apos;m also currently exploring Summer 2023 internship
            opportunities.
            {/* <Link href="/contact" className="aboutContact">
              <a className="nav-link">Get in touch</a>.
            </Link> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
