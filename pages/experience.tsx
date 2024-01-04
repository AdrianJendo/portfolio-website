import { ReactElement, useEffect, useState } from "react";
import experiencesData from "../data/experiences";
import styles from "../styles/Experience.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { sliderVariants } from "../helpers/animations";
import Props from "../types/TransitionProps";

const Experience = ({ nextPage, prevPage }: Props) => {
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
    <motion.div
      className={styles.gridContainer}
      custom={{ nextPage, prevPage }}
      variants={sliderVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        duration: 0.15,
      }}
    >
      {experiences.map((experience, idx) => (
        <div key={experience.date} className={styles.rowContainer}>
          <div className={styles.imgContainer}>
            <div className={idx == 0 ? styles.firstLine : styles.topLine} />
            <div
              className={
                idx == experiences.length - 1
                  ? styles.lastLine
                  : styles.bottomLine
              }
            />
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
    </motion.div>
  );
};

export default Experience;
