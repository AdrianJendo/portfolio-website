import type { NextPage } from "next";
import { ReactElement, useEffect, useState } from "react";
import experiencesData from "../data/experiences";
import styles from "../styles/Experience.module.css";
import Image from "next/image";

const Experience: NextPage = () => {
  const [experiences, setExperiences] = useState<
    {
      jobTitle: string;
      company: string;
      description: Array<string>;
      technologies: string;
      date: string;
      location: string;
      url: string;
      logo: string;
    }[]
  >([]);

  useEffect(() => setExperiences(experiencesData), []);
  return (
    <div className={styles.gridContainer}>
      {experiences.map((experience) => (
        <div key={experience.company} className={styles.cardContainer}>
          <div className={styles.expImg}>{experience.logo}</div>
          <div className={styles.cardBody}>
            <div className={styles.cardHeader}>
              <h4 className={styles.exph4}>
                {experience.jobTitle} @{" "}
                <a
                  className={styles.expa}
                  href={experience.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  {experience.company}
                </a>{" "}
              </h4>
              <span className={styles.exph4}>
                {experience.date} | {experience.location}
              </span>
            </div>
            <div style={{ maxWidth: "100%", display: "inline-flex" }}>
              <ul className={styles.expul}>
                {experience.description.map((point) => (
                  <li key={point} className={styles.expli}>
                    <p className={styles.expp}>{point}</p>
                  </li>
                ))}
              </ul>
            </div>
            <p className={styles.expp} style={{ paddingBottom: "10px" }}>
              <span style={{ fontWeight: 700 }}>Technologies</span>:{" "}
              {experience.technologies}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
