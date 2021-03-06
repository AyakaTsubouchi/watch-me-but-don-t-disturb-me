import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const ProjectDetail = props => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/sign-in" />;
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
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
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
    auth: state.firebase.auth,
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
