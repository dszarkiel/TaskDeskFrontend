import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard';
import TaskForm from './components/TaskForm'
import ShowCard from './components/ShowCard'
import UpdateTaskFrom from './components/UpdateTaskFrom';
import NavBar from './components/NavBar'
import Logo from './images/TaskDesk.png'


class App extends React.Component {

  render(){
    return (
      <BrowserRouter>
    <div className="App">
      <NavBar />
      <img src={Logo} width="400" /><br></br>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/dashboard/new" component={TaskForm} />
        <Route exact path="/dashboard/:id" component={ShowCard} />
        <Route exact path="/dashboard/edit/:id" component={UpdateTaskFrom} />
      </Switch>
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
