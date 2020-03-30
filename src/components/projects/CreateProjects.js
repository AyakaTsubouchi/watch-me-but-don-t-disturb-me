import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../store/actions/projectActions';

class CreateProject extends Component {
  state = {
    taskTitle: '',
    startTime: '',
    endTime: '',
    currentTime: ''
    // currentHour: '',
    // currentMin: ''
  };
  componentDidMount() {
    this.getCurrentTime();
  }
  onHandleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  getCurrentTime = () => {
    const today = new Date();
    const time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    this.setState({
      currentTime: time
    });
    console.log('current', this.state.currentTime);
  };
  //   onHandleStart = e => {
  //     const today = new Date();
  //     const time =
  //       today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  //     this.setState({
  //       currentTime: time
  //     });
  //   };
  onHandleSubmit = e => {
    e.preventDefault();
    this.props.createProject(this.state);
  };
  render() {
    return (
      <div>
        <div className="container">
          <form onSubmit={this.onHandleSubmit} className="white">
            <h5 className="gray-text text-darken-3">Create Project</h5>

            <div className="input-field">
              <label htmlFor="firstName">What are you doing?</label>
              <input
                type="text"
                id="firstName"
                onChange={this.onHandleChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="startTime">From</label>
              <input
                type="number"
                id="startTime"
                placeholder={this.state.currentHour}
                onChange={this.onHandleChange}
              />
              {/* :
              <input
                type="number"
                id="startTime"
                placeholder={this.state.currentMin}
                onChange={this.onHandleChange}
              /> */}
            </div>
            <div className="input-field">
              <label htmlFor="endTime">To</label>
              <input
                type="number"
                id="endTime"
                placeholder={this.state.currentHour}
                onChange={this.onHandleChange}
              />
              {/* :
              <input
                type="number"
                id="startTime"
                placeholder={this.state.currentMin}
                onChange={this.onHandleChange}
              /> */}
            </div>

            <div className="input-field">
              <button
                onClick={this.onHandleStart}
                className="btn pink lighten-1 z-depth-0">
                START
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(null, mapDispatchToProps)(CreateProject);
