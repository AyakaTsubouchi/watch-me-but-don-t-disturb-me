import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
  console.log('projectlist', projects);
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return (
            <Link to={'/project-detail/' + project.id}>
              <ProjectSummary
                project={project}
                id={project.id}
                title={project.title}
              />
            </Link>
          );
        })}
    </div>
  );
};
export default ProjectList;
