import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import { connect } from 'react-redux';

const Navbar = () => {
  return (
    <nav className="nav-warapper grey darken-2">
      <div className="container">
        <Link to="/" className="brand-logo">
          Watch me
        </Link>
        <SignInLinks />
        <SignOutLinks />
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  console.log('nav', state);
  return {};
};

export default connect(mapStateToProps)(Navbar);
