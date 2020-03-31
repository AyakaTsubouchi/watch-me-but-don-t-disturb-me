import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions';

const SignIn = props => {
  return (
    <ul className="right">
      <li>
        <div onClick={props.signOut}>Log out</div>
      </li>
      <li>
        <NavLink to="/create-project">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating blue">
          AT
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
