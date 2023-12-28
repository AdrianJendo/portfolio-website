import type { NextPage } from "next";
import { ReactElement, useEffect, useState } from "react";
import experiencesData from "../data/experiences";
import styles from "../styles/Experience.module.css";

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
      logo: ReactElement;
    }[]
  >([]);

  useEffect(() => setExperiences(experiencesData), []);
  return (
    <div className={styles.container}>
      <div className={styles.experienceContent}>
        <h3 className={styles.exph3}>Cool places I&apos;ve worked at</h3>
        <div style={{ marginTop: "35px" }}>
          {experiences.map((experience) => (
            <div
              key={experience.company}
              className={styles.container}
              style={{ marginTop: "25px" }}
            >
              {window.innerWidth > 768 && (
                <div style={{ width: "100px", padding: "none" }}>
                  {experience.logo}
                </div>
              )}
              <div
                style={{
                  backgroundColor: "rgb(31, 30, 36)",
                  borderRadius: "25px",
                  padding: "5px",
                  boxShadow: "0px 0px 10px",
                  marginLeft: "20px",
                  position: "relative",
                  width: window.innerWidth > 768 ? "95%" : "100%",
                }}
              >
                {" "}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
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
      </div>
    </div>
  );
};

export default Experience;
