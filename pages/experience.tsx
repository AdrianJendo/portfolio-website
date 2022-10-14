import type { NextPage } from "next"
import { useEffect, useState } from "react"
import experiencesData from "../data/experiences"
import styles from "../styles/Experience.module.css"
import Image from "next/image"

const Experience: NextPage = () => {

  const [experiences, setExperiences] = useState<{ jobTitle: string;
    company: string;
    header: string;
    description: Array<string>;
    technologies: string;
    date: string;
    location: string;
    url: string}[]>([]);

  useEffect(() => setExperiences(experiencesData), [])
  return <div className={styles.container}>

    <div className={styles.experienceContent}>
        <div className={styles.experiencesContainer}>
            <div className={styles.work}>
                <h3 className={styles.exph3}>Cool places I&apos;ve worked at</h3>
                  <div style={{marginTop:"35px"}}>
                    {experiences.map(experience => 
                      <div key={experience.company} style={{marginTop: "25px"}}>
                          {/* <Image
                            className={styles.expImage}
                            src="/carta.png"
                            alt="Carta"
                            width={60}
                            height={30}
                          /> */}
                    <div style={{backgroundColor: "rgb(31, 30, 36)", borderRadius:"25px", padding: "5px", boxShadow: "4px 4px 8px"}}> {/* style={{ paddingLeft: "5rem"}}*/}
                        <div style={{display:"flex", justifyContent: "space-between"}}>
                          <h4 className={styles.exph4}>{experience.jobTitle} @ <a className={styles.expa} href={experience.url}>{experience.company}</a> </h4>
                          <span className={styles.exph4}>{experience.date} | {experience.location}</span>
                        </div>
                          <p className={styles.expp}>{experience.header}</p>
                          <ul className={styles.expul}>
                              {experience.description.map(point =>

                              <li key={point}  className={styles.expli}>
                                  <p className={styles.expp}>{point}</p>
                              </li>
                            )

                              }
                          </ul>
                          <p className={styles.expp} style={{paddingBottom: "10px"}}>
                              <span>
                                  <p className={styles.expp}><span style={{fontWeight:700}}>Technologies</span>: {experience.technologies}</p>
                              </span>
                          </p>
                      </div>

                      </div>
                    
                    
                    )
                    }
                  </div>
            </div>
        </div>
    </div>
</div>
}

export default Experience
