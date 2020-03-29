import React from 'react';

export default function ProjectSummary({ project }) {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content gray-text text-darken-3">
        <span className="card-title">Project Title:{project.title}</span>
        <p>posted by ayaka</p>
        <p className="graytext">{project.date}</p>
        <p className="graytext">From {project.startTime}</p>
        <p className="graytext">To {project.endTIme}</p>
      </div>
    </div>
  );
}
