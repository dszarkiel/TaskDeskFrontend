import React from 'react'
import {connect} from 'react-redux'
import {setShowCard} from '../actions/setShowCard'
import completeImg from '../images/Complete.png'
import incompleteImg from '../images/Incomplete.png'
import {completeTask} from '../actions/completeTask'

class TaskCard extends React.Component {

handleClick = (e) => {
  this.props.setShowCard(this.props.task)
  this.props.handleShowCard(e.target.id)
}

handleCompleteTask = (e) => {
  const id = e.target.id

  fetch(`http://localhost:3000/tasks/${id}`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        complete: true
    })
})
.then(response => response.json())
.then(() => {
  this.props.completeTask(id)
})
} 


    render(){

        const {id, title, body, complete} = this.props.task

        return(
            <div className="card">
            <h5 className="card-header" >{complete ? <img src={completeImg} width="40px" height="30px"  /> : <img src={incompleteImg} width="20px" height="20px"/> }  {title}</h5>
            <div className="card-body">
              <p className="card-text">{body}</p>
              <button className="btn btn-primary" id={id} onClick={this.handleClick}>View</button>
              {complete ? <button disabled={true} className="btn btn-success">Complete</button> : <button className="btn btn-success" id={id} onClick={this.handleCompleteTask} >Complete Task</button>}
            </div>
          </div>
        )
    }
}

const mapDispatchToProps = {
    setShowCard: setShowCard,
    completeTask: completeTask
}

export default connect(null, mapDispatchToProps)(TaskCard)