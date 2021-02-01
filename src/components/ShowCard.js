import React from 'react'
import {connect} from 'react-redux'
import {deleteTask} from '../actions/deleteTask'
import completeImg from '../images/Complete.png'
import incompleteImg from '../images/Incomplete.png'

class ShowCard extends React.Component {

    handleBack = () => {
        this.props.history.push("/dashboard")
    }
    
    handleDelete = (e) => {
        const id = e.target.id

        fetch(`http://localhost:3000/tasks/${id}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(() => {
            this.props.deleteTask(id)
            this.props.history.push("/dashboard")
        })
    }

    handleUpdate = (e) => {
        this.props.history.push(`/dashboard/edit/${e.target.id}`)
    }

     convert = () =>{
        let current_datetime = new Date()
        let formatted_date = (current_datetime.getMonth() + 1) + "-" +  current_datetime.getDate() + "-" + current_datetime.getFullYear()
        return formatted_date;
      }

    render(){

        const {id, title, body, complete, created_at, updated_at} = this.props.showTask

        return(
            <div className="show-card">
                <div className="card text-center">
                    <div className="card-header">
                           TASK {complete ? <img src={completeImg} width="40px" height="30px" /> : <img src={incompleteImg} width="20px" height="20px" /> } 
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{body}</p>
                        <button className="btn btn-danger" id={id} onClick={this.handleDelete}>Delete</button>
                        <button className="btn btn-primary" id={id} onClick={this.handleUpdate} >Update</button>
                        <button className="btn btn-primary" onClick={this.handleBack}>Back</button>
                    </div>
                 <div className="card-footer text-muted">
                     Created: {this.convert(created_at)}
                </div>
                </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showTask: state.showTask,
    }
}

const mapDispatchToProps = {
    deleteTask: deleteTask
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowCard)