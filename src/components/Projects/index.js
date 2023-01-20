import './index.css'

const Projects = (props) =>{
    const {project} = props;
    
    const {imageURL,title,description} = project;
    return (
        <li className='project-container'>
            <img src={imageURL} alt="projectImage" className='project-image'/>
            <div className="project-description-container">
                <h1 className='project-name'>{title}</h1>
                <p className='project-description'>{description}</p>
            </div>
        </li>
    )

}

export default Projects;

