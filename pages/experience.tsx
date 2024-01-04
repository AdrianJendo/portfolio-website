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
      technologies: Array<string>;
      date: string;
      location: string;
      url: string;
      logo: ReactElement;
    }[]
  >([]);

  useEffect(() => setExperiences(experiencesData), []);
  return (
    <div className={styles.gridContainer}>
      {experiences.map((experience) => (
        <div key={experience.date} className={styles.rowContainer}>
          <div className={styles.imgContainer}>
            <div className={styles.topLine} />
            <div className={styles.bottomLine} />
            <div className={styles.logo}>{experience.logo}</div>
          </div>
          <div className={styles.cardContainer}>
            <h3 className={styles.cardHeader}>
              {experience.jobTitle}
              {" @ "}
              <a
                className={styles.cardLink}
                href={experience.url}
                rel="noreferrer"
                target="_blank"
              >
                {experience.company}
              </a>
            </h3>
            <ul className={styles.cardBody}>
              {experience.description.map((item) => (
                <li key={item} className={styles.cardLi}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
            <div className={styles.footerContainer}>
              {experience.technologies.map((tech) => (
                <div key={tech} className={styles.techTooltip}>
                  <Image
                    src={`/${tech}.svg`}
                    alt={tech}
                    height="32"
                    width="32"
                    className={styles.footerIcon}
                  />
                  <span className={styles.tooltipText}>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
