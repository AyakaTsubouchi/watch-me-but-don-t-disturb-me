import React from 'react';
import moment from 'moment';

export default function ProjectSummary({ project }) {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content gray-text text-darken-3">
        <span className="card-title">Project Title:{project.title}</span>
        <p>posted by {project.authorFirstName}</p>
        <p className="graytext">
          {/* {moment(project.createdAt.toDate()).calendar()} */}
        </p>
        <p className="graytext">From {project.startTImeH}</p>
        <p className="graytext">To {project.endTime}</p>
      </div>
    </div>
  );
}
