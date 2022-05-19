import React from "react";

import Project1 from 'src/images/project1.png'
import Project2 from 'src/images/project2.png'
import Project3 from 'src/images/project3.png'
import ArrowRight from 'src/images/arrow_right.svg'
import S from "./projects.module.scss";

const Projects = () => {
    const projectList = [{
        _id: 1,
        _projectName: 'Nea',
        _description: 'A general exploration of the improvements that have been made around the platform by creating our own design system.',
        _link: '',
        _image: Project1
    }, {
        _id: 2,
        _projectName: 'Mercadona',
        _description: 'Redesigning mercadona website according to users needs by analizing their old and current platform.',
        _link: '',
        _image: Project2
    }, {
        _id: 3,
        _projectName: 'Looped Animations',
        _description: 'Creative animations made with After effects.',
        _link: '',
        _image: Project3
    }]
    return <div className={S.projects}>
        {projectList.map((project) => <div className={S.project_container}>
            <p className={S.project_name} > {project._projectName}</p>
            <img src={project._image} className={S.project_image}></img>
            <div className={S.description_container}>
                <p className={S.project_description}>{project._description}</p>
                <div className={S.learn_more_container}>
                    <div className={S.learn_more_text}>LEARN MORE</div>
                    <svg className={S.arrow} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor" />
                    </svg>
                </div>
            </div>
        </div>)}
    </div>
}

export default Projects