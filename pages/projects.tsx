import type { NextPage } from "next";
import { useEffect, useState } from "react";
import projectsData from "../data/projects";
import styles from "../styles/Experience.module.css";
import Image from "next/image";

const Project: NextPage = () => {
  const [projects, setProjects] = useState<
    {
      name: string;
      description: string;
      technologies: string;
      about: Array<string>;
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
          <div className={styles.cardBody}>
            <h4>{project.name}</h4>
            {project.about.map((item) => (
              <ul key={item}>{item}</ul>
            ))}
          </div>
          <div className={styles.footerContainer}>
            <p>React</p>
            <p>React</p>
            <p>React</p>
          </div>
        </div>
      ))}
    </div>
    // <div className={styles.container}>
    //   <div className={styles.experienceContent}>
    //     <div className={styles.experiencesContainer}>
    //       <div className={styles.work}>
    //         <h3 className={styles.exph3}>Cool projects I&apos;ve built</h3>
    //         <div style={{ marginTop: "35px" }}>
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
    //                 {project.demo && (
    //                   <div
    //                     style={{
    //                       margin: "auto",
    //                       width: "50%",
    //                       marginTop: "10px",
    //                       marginBottom: "20px",
    //                     }}
    //                   >
    //                     <iframe
    //                       width="100%"
    //                       height="315"
    //                       src={project.demo}
    //                       title="YouTube video player"
    //                       frameBorder="0"
    //                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //                       allowFullScreen
    //                     ></iframe>
    //                   </div>
    //                 )}
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
