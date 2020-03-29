import React from 'react';
import { NavLink } from 'react-router-dom';

const SignOut = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/sign-up">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/sign-in">Sign in</NavLink>
      </li>
    </ul>
  );
};
export default SignOut;
