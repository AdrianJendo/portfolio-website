import type { NextPage } from "next";
import { useEffect, useState } from "react";
import projectsData from "../data/projects";
import styles from "../styles/Projects.module.css";
import Image from "next/image";
import Link from "next/link";

const Project: NextPage = () => {
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
    <div className={styles.gridContainer}>
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
              <Link
                href={project.github}
                rel="noreferrer"
                target="_blank"
                className={styles.githublink}
                style={{
                  marginLeft: "10px",
                  position: "absolute",
                }}
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
    </div>
    //           {projects.map((project) => (
    //             <div key={project.github} style={{ marginTop: "25px" }}>
    //               <div
    //                 style={{
    //                   backgroundColor: "rgb(31, 30, 36)",
    //                   borderRadius: "25px",
    //                   padding: "5px",
    //                   boxShadow: "0px 0px 10px",
    //                 }}
    //               >
    //                 {" "}
    //                 {/* style={{ paddingLeft: "5rem"}}*/}
    //                 <div
    //                   style={{
    //                     display: "flex",
    //                     justifyContent: "space-between",
    //                   }}
    //                 >
    //                   <h4
    //                     className={styles.exph4}
    //                     style={{ marginTop: "15px" }}
    //                   >
    //                     {project.website ? (
    //                       <a
    //                         href={project.website}
    //                         rel="noreferrer"
    //                         target="_blank"
    //                         className={styles.expa}
    //                       >
    //                         {project.name}
    //                       </a>
    //                     ) : (
    //                       <span>{project.name}</span>
    //                     )}
    //                     <a
    //                       href={project.github}
    //                       rel="noreferrer"
    //                       target="_blank"
    //                       className={styles.githublink}
    //                       style={{
    //                         marginLeft: "10px",
    //                         position: "absolute",
    //                       }}
    //                     >
    //                       <Image
    //                         alt="Github"
    //                         width={20}
    //                         height={20}
    //                         src="/github.svg"
    //                       />
    //                     </a>
    //                   </h4>
    //                 </div>
    //                 <p className={styles.expdescription}>
    //                   {project.description}
    //                 </p>
    //                 <ul className={styles.expul}>
    //                   {project.about.map((point) => (
    //                     <li key={point} className={styles.expli}>
    //                       <p className={styles.expp}>{point}</p>
    //                     </li>
    //                   ))}
    //                 </ul>
    //                 <p
    //                   className={styles.expdescription}
    //                   style={{ paddingBottom: "10px" }}
    //                 >
    //                   <span style={{ fontWeight: 700 }}>Technologies</span>:{" "}
    //                   {project.technologies}
    //                 </p>

    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Project;
