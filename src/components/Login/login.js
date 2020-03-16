import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            redirect: false
        }
    }

    login = () => {
        const authData = {
            email: this.state.email,
            password: this.state.password
        }

        if (this.state.email && this.state.password) {
            axios.post("/api/user/login", authData)
                .then(result => {
                    //console.log(result);
                    if (result.data.success === true) {
                        sessionStorage.setItem('01627715573', result);
                        localStorage.setItem('jwt',result.data.token)
                        this.setState({
                            redirect: true
                        })
                    } else {
                        //console.log("login error")
                        alert('Invalid email or password')
                    }

                })
                .catch(e => {
                    console.log(e)
                })
        } else {
            alert('Please provide Email and Password')
        }



    }

    ontextChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });

        //console.log(this.state)
    }

    render() {
        if (this.state.redirect) {
            return (
                <>
                {/* <Redirect to={'/Dashboard'} /> */}
                <Redirect to={'/DashBoard/DashBoardTable'} />
                {/* <Redirect to={'/details'} /> */}
                </>
            )
        }
        if (sessionStorage.getItem('01627715573')) {
            return (<Redirect to={'/DashBoard/DashBoardTable'} />)
        }
        return (
            <div className="container">

                <h2 className="col-9 mx-auto col-md6 col-lg-3 my-5 text-sm-center">Login</h2>
                <ul>
                    <label>User Name: </label>
                    <input type="text" name="email" placeholder="email" onChange={this.ontextChange} className="form-control" />
                </ul>


                <ul>
                    <label>Password: </label>
                    <input type="password" name="password" placeholder="Password" onChange={this.ontextChange} className="form-control" />
                </ul>

                <ul> <input type="submit" value="Login" className="btn-primary p-2  mx-auto  col-lg-12 text-sm-center" onClick={this.login} /></ul>


            </div>
        )
    }
}

export default login
