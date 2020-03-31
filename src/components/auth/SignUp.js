import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  };
  onHandleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  onHandleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <div className="container">
          <form onSubmit={this.onHandleSubmit} className="white">
            <h5 className="gray-text text-darken-3">Join Us!</h5>

            <div className="input-field">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                onChange={this.onHandleChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" onChange={this.onHandleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.onHandleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">password</label>
              <input
                type="password"
                id="password"
                onChange={this.onHandleChange}
              />
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">SIGNUP</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(SignUp);
