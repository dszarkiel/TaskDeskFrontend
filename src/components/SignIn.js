import React from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../actions/loginUser'

class SignIn extends React.Component {
    state = {
        email: "dom@gmail.com",
        password: "abc",
        error: ""
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        
        fetch('http://localhost:3000/api/v1/auth', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(data => {
            if (data.error){
                this.setState({
                    error: data.error
                })
            } else {
               this.props.loginUser(data)
               this.props.history.push("/dashboard")
            } 
        })
    }

    render(){
        return(
            <div className="login-screen" >
                <h3>Please sign in below:</h3>
                {this.state.error ? <h5 style={{color: "red"}}>{this.state.error}</h5> : null}
                <form onSubmit={this.handleSubmit} >
                    <input type="input" placeholder="Please enter your email..." size="50" name={"email"} value={this.state.email} onChange={this.handleInputChange} /><br></br><br></br>
                    <input type="password" placeholder="Please enter your password..." size="50" name={"password"} value={this.state.password} onChange={this.handleInputChange} /><br></br><br></br>
                    <input className="btn btn-success" type="submit" value="Sign In"/>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    loginUser: loginUser
}

export default connect(null, mapDispatchToProps)(SignIn)