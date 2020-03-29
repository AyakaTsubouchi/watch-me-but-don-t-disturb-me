import React from 'react';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Log out</NavLink>
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
export default SignIn;
