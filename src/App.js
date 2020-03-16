import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.css';
// import './components/Home/home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/Dashboard';
import Defult from './components/Default';
import Login from './components/Login/login';
import Home from './components/Home/home';
import HomeNavBar from './components/Home/homeNavBar';
import OurServices from './components/Home/OurServices/ourservice'

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            
        }
    }
  componentDidMount = () => {
    if (sessionStorage.getItem('01627715573')) {
    } else {
        this.setState({
            redirect: true
        })
    }
}

logout = () => {
    sessionStorage.setItem('01627715573', '');
    localStorage.setItem('jwt','')
    localStorage.clear()
    sessionStorage.clear();
    this.setState({
        redirect: true
    })
}
  render(){
  
      return (
        <React.Fragment>
          
          <HomeNavBar/>
          <Switch>
              <Route path="/"  exact component={Home} />
              <Route path="/login" exact  component={Login} />
              <Route path="/ourservices"  component={OurServices} />
              <Route path="/Dashboard" component={Dashboard} /> 
              <Route component={Defult} />
          </Switch>
        </React.Fragment>
      );
  }
}

export default App;
