import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'
import Details from './components/Others/Details';
import DashBoardTable from './components/Dashboard/DashBoardTable/DashBoardTable'
import DashBoardNavbar from './components/Dashboard/DashNavBar/DashBoardNavbar';
class AnotherRouteForAdmin extends Component{
    render(){
        return(
            <>
         
                <Switch>
                    {/* <DashBoardNavbar> */}
                        <Route  path="/Dashboard" component={Dashboard} /> 
                        <Route  path="/Dashboard/details" component={Details} />
                        <Route  path="/Dashboard/DashBoardTable" component={DashBoardTable} />
                    {/* </DashBoardNavbar> */}
                </Switch>
         
            </>
        );
    }
}

export default AnotherRouteForAdmin