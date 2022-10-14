import type { NextPage } from "next";
import { useEffect, useState } from "react";
import projectsData from "../data/projects";
import styles from "../styles/Experience.module.css";

// Embed Circle image of all the projects

const Project: NextPage = () => {
  const [projects, setProjects] = useState<
    {
      name: string;
      description: string;
      technologies: string;
      about: Array<string>;
      github: string;
      website: string;
    }[]
  >([]);

  useEffect(() => setProjects(projectsData), []);
  return (
    <div className={styles.container}>
      <div className={styles.projectContent}>
        <div className={styles.sideProjects}>
          <h3 className={styles.exph3}>Cool projects I&apos;ve built</h3>

          <div style={{ marginTop: "35px" }}>
            {projects.map((project) => (
              <div
                key={project.github}
                style={{
                  backgroundColor: "rgb(31, 30, 36)",
                  borderRadius: "25px",
                  padding: "5px",
                  boxShadow: "4px 4px 8px",
                  marginTop: "25px",
                }}
              >
                {" "}
                {/* style={{ paddingLeft: "5rem"}}*/}
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4 className={styles.exph4}>
                    {project.name}{" "}
                    <a
                      className={styles.expa}
                      href={project.github}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>{" "}
                    {project.website && (
                      <a
                        className={styles.expa}
                        href={project.website}
                        rel="noreferrer"
                        target="_blank"
                      >
                        Website
                      </a>
                    )}{" "}
                  </h4>
                </div>
                <p className={styles.expp}>{project.description}</p>
                <ul className={styles.expul}>
                  {project.about.map((point) => (
                    <li key={point} className={styles.expli}>
                      <p className={styles.expp}>{point}</p>
                    </li>
                  ))}
                </ul>
                <p className={styles.expp} style={{ paddingBottom: "10px" }}>
                  <span>
                    <p className={styles.expp}>
                      <span style={{ fontWeight: 700 }}>Technologies</span>:{" "}
                      {project.technologies}
                    </p>
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
