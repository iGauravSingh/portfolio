import './ProjectItem.css'
import Button from './Button'


const ProjectItem = ({ id, name, disc, img,link}) => {

  // const handleClick =()=>{
  //   window.location.replace(link);
  // }

  return (
    <div className='project-card-container'>
        <img src={img} alt="name" />
        <div className='project-item-name'>
            {name}
        </div>
        <div className='p-item-flex'>
          <div className='project-item-disc'>{disc}</div>
          <div className='project-item-button'>
              <a style={{textDecoration: 'none', border: '2px solid rgb(7, 43, 66)', padding: '4px 6px'}} href={link} target="_blank" rel="noreferrer">View</a>
          </div>
        </div>
        
    </div>
  )
}

export default ProjectItem