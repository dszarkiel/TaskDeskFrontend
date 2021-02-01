import React from 'react'
import TaskCard from './TaskCard'
import {connect} from 'react-redux'

class TaskContainer extends React.Component {

    renderTasks = () => {
        return this.props.tasks.map(taskObj => {
            return <TaskCard key={taskObj.id} task={taskObj} handleShowCard={this.props.handleShowCard} />
        })
    }

    render(){
        return(
            <div className="task-container">
                {this.renderTasks()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, null)(TaskContainer)