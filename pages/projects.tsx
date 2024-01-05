import { useEffect, useState } from "react";
import projectsData from "../data/projects";
import styles from "../styles/Projects.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { sliderVariants } from "../helpers/animations";
import Props from "../types/TransitionProps";

const Project = ({ nextPage, prevPage }: Props) => {
  const [projects, setProjects] = useState<
    {
      name: string;
      description: string;
      technologies: string[];
      about: string[];
      github: string;
      website?: string;
      demo?: string;
    }[]
  >([]);

  useEffect(() => setProjects(projectsData), []);
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
      {projects.map((project) => (
        <div key={project.name} className={styles.cardContainer}>
          <div>
            <h3 className={styles.cardHeader}>
              {project.website ? (
                <Link
                  className={styles.headerLink}
                  href={project.website}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>{project.name}</span>
                </Link>
              ) : (
                <span>{project.name}</span>
              )}
              &nbsp; &nbsp;
              <Link
                href={project.github}
                rel="noreferrer"
                target="_blank"
                className={styles.githublink}
              >
                <Image alt="Github" width={20} height={20} src="/github.svg" />
              </Link>
            </h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <ul className={styles.cardBody}>
              {project.about.map((item) => (
                <li key={item} className={styles.cardLi}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {project.demo && (
              <div className={styles.videoContainer}>
                <iframe
                  className={styles.video}
                  width="100%"
                  height="315"
                  src={project.demo}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <div className={styles.footerContainer}>
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  data-tooltip={tech}
                  className={styles.techTooltip}
                >
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

export default Project;
