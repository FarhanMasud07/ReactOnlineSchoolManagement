import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import DashBoardaNavBar from './DashNavBar/DashBoardNavbar';
import { Route, Switch } from 'react-router-dom';
import Details from '../Others/Details';
import DashBoardTable from './DashBoardTable/DashBoardTable'

export default class Dashboard extends Component {
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
    render() {
       
        if (this.state.redirect) {
            return (<Redirect to={'/login'} />)
        }
        return (
            <>
                    <DashBoardaNavBar clicked = {this.logout}>
                        <Switch>
                            <Route path="/Dashboard/details" component={Details} />
                            <Route path="/Dashboard/DashBoardTable" component={DashBoardTable} />
                        </Switch>
                    </DashBoardaNavBar>
            </>
        )
    }
}
