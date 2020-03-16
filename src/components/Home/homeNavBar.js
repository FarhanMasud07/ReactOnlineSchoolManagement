import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import '../Home/home.css'
export class homeNavBar extends Component {
    constructor(){
        super();
        this.state={
            isOpen:false
        }
    }

    
    handleChange = () => {
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
    render() {
        return (
            <nav className="navbar">
                    <div className="nav-center">
                        <div className="nav-header">
                            <Link to="/">Prd</Link>
                            <button type="button" className="nav-btn" onClick={this.handleChange}>
                                    <FormatAlignRightIcon className="nav-icon"/>
                            </button>
                        </div>
                        <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                 <Link to="/ourservices">Our Services</Link>
                            </li>
                            <li>
                                <Link to="/login">Log in</Link>
                            </li>
                        </ul>
                    </div>
            </nav>
        )
    }
}

export default homeNavBar
