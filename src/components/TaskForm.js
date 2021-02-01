import React from 'react'
import {connect} from 'react-redux'
import {addTask} from '../actions/addTask'

class TaskForm extends React.Component {
    constructor(){
        super()
        
        this.state = {
            title: "",
            body: ""
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.body,
                user_id: this.props.currentUser.id,
                complete: false
            })
        })
        .then(response => response.json())
        .then(newTaskObj => {
            this.props.addTask(newTaskObj)
            this.props.history.push("/dashboard")
        })
    }

    handleBackButton = () => {
        this.props.history.push('/dashboard')
    }

    componentDidMount(){
        if (!this.props.currentUser) {
            this.props.history.push("/login")
        }
    }

    render(){
        return(
            <div className="new-task-card" >
                <div className="card">
                    <div className="card-header">
                        Add Your New Task!
                    </div>
                    <div className="card-body">
                 <form onSubmit={this.handleSubmit} >
                    <input type="input" placeholder="Please enter task title" size="50" name={"title"} value={this.state.title} onChange={this.handleInputChange}/> <br></br> <br></br>
                    <textarea type="input" rows="4" cols="50" placeholder="Please describe your new task" name={"body"} value={this.state.body} onChange={this.handleInputChange}/> <br></br> <br></br>
                    <input className="btn btn-primary" type="submit" value="Add Task"/>
                <button className="btn btn-primary" onClick={this.handleBackButton} >Back</button>

                </form>
                    </div>
                    </div>
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
    addTask: addTask
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)