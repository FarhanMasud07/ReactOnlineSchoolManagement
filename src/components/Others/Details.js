// import React, { Component } from 'react';
// import './Details.css';
// import axios from 'axios';
// import Reviews from './Reviews';

// export default class Details extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             ProductDetails: [],
//         }

//     }
//     componentDidMount = () => {
//         axios.get('/api/products/' + this.props.match.params.id).then(res => {

//             console.log(res.data.data);
//             this.setState({
//                 ProductDetails: res.data.data
//             });
//         });
//     }

//     render() {

//         return (
//             <>
//                 <div className="col-9 mx-auto col-md6 col-lg-3 my-5 text-sm-center">
//                     <h3>Details</h3>
//                 </div>
//                 {this.state.ProductDetails == '' ? <div className="col-9 mx-auto col-md6 col-lg-3 my-5 text-sm-center">
//                     <p className="spinner-border text-primary"></p>
//                 </div> :
//                     <div className="container">
//                         <p><b><label> Name:</label></b>  {this.state.ProductDetails.name}</p>
//                         <p><b><label> Description:</label></b> {this.state.ProductDetails.description}</p>
//                         <p><b><label> Price:</label></b> {this.state.ProductDetails.price}</p>
//                         <p><b><label> Stock:</label></b> {this.state.ProductDetails.stock}</p>
//                         <p><b><label> Discount:</label></b> {this.state.ProductDetails.discount}</p>
//                         <p><b><label> TotalPrice:</label></b> {this.state.ProductDetails.totalPrice}</p>
//                         <p><b><label> Rating:</label></b> {this.state.ProductDetails.rating}</p>
//                         {/* <Link to="/details/:id/reviews">Show Reviews</Link> */}
//                         <Reviews id={this.state.ProductDetails.id} />
//                     </div>
//                 }
//             </>
//         );
//     }
// }

import React from 'react';
 const kisu=()=>{
    return(<h1>yo</h1>);
}
export default kisu