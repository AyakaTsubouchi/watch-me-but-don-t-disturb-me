import React, { Component } from 'react';

export default class SignIn extends Component {
  state = {
    email: '',
    password: ''
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
    return (
      <div>
        <div className="container">
          <form onSubmit={this.onHandleSubmit} className="white">
            <h5 className="gray-text text-darken-3">Sign In</h5>
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
              <button className="btn pink lighten-1 z-depth-0">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
