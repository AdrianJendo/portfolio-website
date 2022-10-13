import type { NextPage } from "next"
import { useEffect, useState } from "react"
import projectsData from "../data/projects"

const Project: NextPage = () => {

  const [projects, setProjects] = useState<{ name: string;
    description: string;
    technologies: string;
    about: Array<string>;
    github: string;
    website: string;
    }[]>
    ([]);

  useEffect(() => setProjects(projectsData), [])
  return <div className='container'>

    <div className='project-content'>
            {/* <div className='side-projects'>
                <h3>Cool projects I've built</h3>
                {projects.map(project =>
                    <div>
                        <h4>{project.name}<a href={project.url}>{project.company}</a></h4>
                        <p>{project.header}</p>
                        <ul>
                            <li >
                                <p>{project.description}</p>
                            </li>
                        </ul>
                        <p>
                            <span>
                                <p><span style={{fontWeight:700}}>Technologies</span>: {project.technologies}</p>
                            </span>
                            {project.date} - {project.location}
                        </p>
                    </div>
                )}
            </div> */}
        </div>
    </div>
}

export default Project
