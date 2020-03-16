import React, { Component } from 'react'
import Home from './Hero';
import { Link } from 'react-router-dom';
import Banner from './Home/Banner/banner'
export default class Default extends Component {
   
    render() {
       
            return (
                <>
                   
                    <Home>
                        <Banner title="404" subtitle="Page Not Found">
                            <Link to="/" className="btn-primary">Return Home</Link>
                        </Banner>
                    </Home>
                </>
       
        );
    }
}
