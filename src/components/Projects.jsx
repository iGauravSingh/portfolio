

import './Projects.css'
import proj from '../assets/proj.svg'
import blog from '../assets/blog.jpg'
import shop from '../assets/shop.jpg'
import notes from '../assets/notessimple.jpg'
import ProjectItem from './ProjectItem'
import { forwardRef } from 'react'

const projectData = [
  { id: 1, name: 'Travel Blog', disc: 'App made with MERN stack has functionality of Authentication and CRUD also has feature of uploading user pictures to cloud also user can like and bookmark the posts.', img: blog, link: 'https://travelblog-4nb3.onrender.com/'},
  { id: 2, name: 'Shop', disc: 'App made with MERN Stack with Authentication, Authorization, Redux, Redux Toolkit.', img: shop, link: 'https://mernshop-mcfm.onrender.com/'},
  { id: 3, name: 'Notes', disc: 'Notes taking App with React and Redux', img: notes, link: 'https://notessimple.onrender.com/'},
  { id: 4, name: 'Weather APP', disc: 'App using React and external api to show weather data.', img: proj, link: 'https://notessimple.onrender.com/'},
]

const Projects = () => {
  return (
    <div id='projects' className='project-container'>
      {projectData.map(project=> (
        <ProjectItem key={project.id} name={project.name} disc={project.disc} img={project.img} link={project.link} />
      ))}
    </div>
  )
}

export default Projects