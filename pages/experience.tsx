import type { NextPage } from "next"
import { useEffect, useState } from "react"
import experiencesData from "../data/experiences"

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
  return <div className='container'>

    <div className='experience-content'>
        <div className='experiences-container'>
            <div className='work'>
                <h3>Cool places I've worked at</h3>
                  {experiences.map(experience => 
                  
                    <div >

                        <h4>{experience.jobTitle}<a href={experience.url}>{experience.company}</a></h4>
                        <ul>
                            <li >
                                <p>{experience.description}</p>
                            </li>
                        </ul>
                        <p>
                            <span>
                                <p><span style={{fontWeight:700}}>Technologies</span>: {experience.technologies}</p>
                            </span>
                            {experience.date} - {experience.location}
                        </p>
                    </div>
                  
                  
                  )
                  }
            </div>
        </div>
    </div>
</div>
}

export default Experience
