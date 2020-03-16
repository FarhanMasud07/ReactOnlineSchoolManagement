import React, { Component } from 'react'
import axios from 'axios';

export class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Reviews: []
        }
    }

    componentDidMount = () => {
        axios.get('/api/products/' + this.props.id + '/reviews').then(res => {

            console.log(res.data.data);
            this.setState({
                Reviews: res.data.data
            });
        });
    }

    render() {
        return (
            <div >
                <b className="col-9 mx-auto col-md6 col-lg-3 my-2 text-sm-center"><h1>Reviews</h1></b>

                {}
                <table className="table-bordered ">
                    <tr className="table-danger text-center">
                        <th>Customer</th>
                        <th>Comment</th>
                        <th>Star</th>
                    </tr>
                    {
                        this.state.Reviews == '' ? <div className="col-9 mx-auto col-md6 col-lg-3 my-5 text-sm-center">
                            <p className="spinner-border text-primary"></p>
                        </div> :
                            this.state.Reviews.map(data => {
                                console.log(data.customer);
                                return (
                                    <>

                                        <tr className="text-center">
                                            <td>{data.customer}</td>
                                            <td>{data.review}</td>
                                            <td>{data.star}</td>
                                        </tr>


                                    </>
                                );
                            })

                    }

                </table>
            </div>
        )
    }
}

export default Reviews
