import type { NextPage } from "next"
import { useEffect, useState } from "react"
import projectsData from "../data/projects"

const Experience: NextPage = () => {

  const [projects, setProjects] = useState<{ name: string;
    description: string;
    technologies: string;
    about: string;
    github: string;
    website: string;
    }[]>
    ([]);

  useEffect(() => setProjects(projectsData), [])
  return <div className='container'>

    <div className='experience-content'>
            <div className='side-projects'>
                <h3>Cool projects I've built</h3>
                {projects.map(project =>
                    <div>
                        <h4><a className='projct-name'  href={project.github}>{project.name}</a></h4>
                        <p className='project-description'>{project.description}</p>
                        <p><span style={{fontWeight:700}}>Technologies</span>: {project.technologies}</p>
                        <p>
                            <span >
                                <a className='awardUrl' >{project.about}</a>
                            </span>
                        </p>
                        <p>
                            <span>
                                {project.about}
                            </span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    </div>
}

export default Experience
