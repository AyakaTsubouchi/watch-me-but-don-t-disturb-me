import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetail = props => {
  const { project } = props;
  if (project) {
    return (
      <div className="container section project-details">
        hello
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <p>posted by {project.authorFirstName}</p>
            <p>{project.createdAt}</p>
            <p>
              from {project.startTime} to {project.endTime}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project ...</p>
      </div>
    );
  }
};
const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'projects'
    }
  ])
)(ProjectDetail);
