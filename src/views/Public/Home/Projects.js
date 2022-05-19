import React from "react";

import Project1 from 'src/images/project1.png'
import Project2 from 'src/images/project2.png'
import Project3 from 'src/images/project3.png'
import ArrowRight from 'src/images/arrow_right.svg'
import S from "./home.module.scss";

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
                    <img src={ArrowRight}></img>
                </div>
            </div>
        </div>)}
    </div>
}

export default Projects