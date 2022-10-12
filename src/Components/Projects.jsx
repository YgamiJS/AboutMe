import styled from "../App.module.scss";

export default function Projects({projects}){
    return (
        <div className={styled.wraperProjects}>
            {projects.map((project) => 
                <div key={project.name}>
                    <img src={project.src} alt="" />
                    <div>
                        <h1>{project.name}</h1>
                        <p>{project.page}</p>
                        <a href={project.url}>Ссылка</a>
                    </div>
                </div>
            )}
        </div>
    )
}