import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser} from '../actions/logoutUser'

class NavBar extends React.Component {

  handleLogout = () => {
    this.props.logoutUser()
    this.props.history.push("/login")

  }

  handleCreateNewTask = () => {
    this.props.history.push("/dashboard/new")
  }

  render(){
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">TaskDesk</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    </button>

      {this.props.currentUser ?
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#" onClick={this.handleCreateNewTask}>New Task <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#" onClick={this.handleLogout}>Sign Out<span className="sr-only">(current)</span></a>
        </li>
      </ul>
      </div>
        :
        null
        }

      </nav>
        </div>
    );
  }};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = {
  logoutUser: logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
