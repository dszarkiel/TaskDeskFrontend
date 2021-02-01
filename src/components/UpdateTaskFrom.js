import React from 'react'
import {connect} from 'react-redux'
import {updateTask} from '../actions/updateTask'
import {withRouter} from 'react-router-dom'

class UpdateTaskFrom extends React.Component {
        state = {
            title: this.props.showTask.title,
            body: this.props.showTask.body
        }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const id = e.target.id
        fetch(`http://localhost:3000/tasks/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.body
            })
        })
        .then(response => response.json())
        .then(updatedTask => {
            this.props.updateTask(updatedTask)
            this.props.history.push('/dashboard')
        })
    }

    handleBackButton = (e) => {
        const id = e.target.parentElement

        this.props.history.push(`/dashboard/${id}`)
    }
    
    render(){
        return(
            <div className="update-form" >
            <div class="card">
            <div class="card-header">
            <h1>Update Task</h1>
            </div>
            <div class="card-body">
            <form onSubmit={this.handleSubmit} id={this.props.showTask.id}>
                    <input type="input" placeholder="Please update your task title" size="51" name={"title"} value={this.state.title} onChange={this.handleInputChange} /><br></br><br></br>
                    <textarea type="input" rows="4" cols="50" placeholder="Please update your task description" name={"body"} value={this.state.body} onChange={this.handleInputChange} /><br></br><br></br>
                    <input className="btn btn-success" type="submit" value="Update Task"/>
                    <button className="btn btn-primary" onClick={this.handleBackButton} >Back</button>
                </form>
            </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        showTask: state.showTask
    }
}

const mapDispatchToProps = {
    updateTask: updateTask
} 

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UpdateTaskFrom))