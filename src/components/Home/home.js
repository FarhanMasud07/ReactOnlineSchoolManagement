import React, { Component } from 'react'
import Hero from '../Hero';
import Banner from './Banner/banner';
import {Link} from 'react-router-dom';
import Services from './Services/services';

export class home extends Component {
    
    render() {
        return (
            <>
              <Hero>
                <Banner title="Welcome to Prd" subtitle="'~Where Heros Created'">
                    <Link to="/ourservices" className="btn-primary">Our Services</Link>
                </Banner>
              </Hero>
              <Services/>
            </>
        )
    }
}

export default home
