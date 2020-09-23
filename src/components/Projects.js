import React from "react";

function Projects(props) {
    const { projects } = props;
    const projectColumn = [];
    const columns = 3;
    const lengthArr = Math.round(projects.length / columns);
    for (let i = 0; i < columns; i += 1) {
        projectColumn.push(projects.slice(lengthArr * i, lengthArr * (i + 1)));
    }
    // console.log(projectColumn)
    // console.log(projectColumn.map(o => <div key={Math.random()} className="column">
    //     {o.map(a => <img key={a.img} src={a.img} alt="img" />)}
    // </div>)

    //)

    return <>
        <div className="project-list">
            {projectColumn.map(o => <div key={Math.random()} className="column">
                {o.map(a => <img key={a.img} src={a.img} alt="img" />)}
            </div>)}
        </div>
    </>
}

export default Projects;