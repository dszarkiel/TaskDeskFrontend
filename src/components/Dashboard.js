import React from 'react'
import TaskContainer from './TaskContainer'
import {connect} from 'react-redux'
import {logoutUser} from '../actions/logoutUser'

class Dashboard extends React.Component {


    handleShowCard = (id) => {
        this.props.history.push(`/dashboard/${id}`)
    }

    componentDidMount(){
        if (!this.props.currentUser) {
            this.props.history.push("/login")
        }
    }

    render(){
        return(
            <div className="dashboard" >
                <TaskContainer handleShowCard={this.handleShowCard} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = {
    logoutUser: logoutUser
  }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)