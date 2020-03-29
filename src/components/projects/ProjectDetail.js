import React from 'react';

export default function ProjectDetail(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title -{id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            corporis nihil, iusto expedita provident debitis dolores rem
            suscipit! Nostrum eveniet doloremque odit commodi at dolorum dolore
            ad veritatis, tempora quis?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <p>posted by ayaka</p>
          <p>Mar 29 from 10:10 to 12:10</p>
        </div>
      </div>
    </div>
  );
}
