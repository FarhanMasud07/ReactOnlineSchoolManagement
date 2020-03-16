import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import axios from 'axios';
import { Link } from 'react-router-dom';
// import FullPost from './FullPost';

export default class Product extends Component {
    constructor() {
        super();
        this.state = {
            Products: [],
            selectedProductId: null,
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 4,
            pageRangeDisplayed: 3
        };
        this.handlePageChange = this.handlePageChange.bind(this);
        //this.handleDetailsProduct = this.handleDetailsProduct(this);
    }


    componentDidMount = () => {
        axios.get('/api/products').then(res => {
            console.log(res.data.links);
            console.log(res);
            this.setState({
                Products: res.data.data
            });
        });
    }


    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
        axios.get('http://127.0.0.1:8001/api/student/students/get?page=' + pageNumber).then(res => {
            this.setState({
                Products: res.data.data,
                itemsCountPerPage: res.data.meta.per_page,
                totalItemsCount: res.data.meta.total,
                activePage: res.data.meta.current_page
            });

        });
    }

    // handleDetailsProduct = (id) => {
    //     this.setState({
    //         selectedProductId: id
    //     })
    //     //console.log(id);
    //     // this.setState({ activePage: pageNumber });
    //     // axios.get('/api/products/' + id).then(res => {
    //     //     this.setState({
    //     //         Products: res.data.data,
    //     //         // itemsCountPerPage: res.data.meta.per_page,
    //     //         // totalItemsCount: res.data.meta.total,
    //     //         // activePage: res.data.meta.current_page
    //     //     });
    //     //     console.log(`Each Product ${res}`);

    //     // });
    // }

    // componentDidUpdate = () => {
    //     if (this.state.selectedProductId) {
    //         if (!this.state.ProductDetails || (this.state.ProductDetails && this.state.ProductDetails.id !== this.state.selectedProductId)) {
    //             axios.get('/api/products/' + this.state.selectedProductId).then(res => {
    //                 this.setState({
    //                     ProductDetails: res.data.data,
    //                     // itemsCountPerPage: res.data.meta.per_page,
    //                     // totalItemsCount: res.data.meta.total,
    //                     // activePage: res.data.meta.current_page
    //                 });
    //                 console.log(res.data.data);

    //             });
    //         }
    //     }

    //     //console.log(this.state.selectedProductId);
    // }

    render() {


        return (
            <>
                <div className="col-9 mx-auto col-md6 col-lg-3 my-5 text-sm-center" >
                    <h1>Our Products</h1>
                </div>
                {this.state.Products === '' ? <div className=" col-9 mx-auto col-md6 col-lg-3 my-5 text-sm-center">
                    <p className="spinner-border text-primary"></p>
                </div> :

                    <div className="container">


                        <div className="row">
                            {
                                this.state.Products.map(data => {
                                    return (

                                        <div className="col-9 mx-auto col-md6 col-lg-3 my-3">
                                            <div className="col-sm" id="cardShopOuter">
                                                <div className="card  bg-light mb-3" id="cardShop">
                                                    <div className="card-header text-sm-center" >
                                                        <h4 className="h4Title">
                                                            {data.name}
                                                        </h4>
                                                    </div>

                                                    <div className="card-body text-sm-center" id="cardShopBody " >

                                                        <b>
                                                            <p className="card-text" >
                                                                {data.rating}
                                                            </p>
                                                        </b>

                                                    </div>
                                                    <div className="card-footer text-sm-center" >
                                                        {/* <Link onClick={() => this.handleDetailsProduct(data.id)} to={'/details/' + data.id} id={this.state.selectedProductId}>View Details</Link> */}
                                                        <Link to={'/details/' + data.id} >View Details</Link>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    );
                                })

                            }

                        </div>
                        {/* </table> */}

                        <div className="d-flex justify-content-center">
                            <Pagination
                                activePage={this.state.activePage}
                                itemsCountPerPage={this.state.itemsCountPerPage}
                                totalItemsCount={this.state.totalItemsCount}
                                pageRangeDisplayed={this.state.pageRangeDisplayed}
                                onChange={this.handlePageChange}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        </div>

                    </div>
                }

            </>

        );

        // return post;
    }
}
