import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Register from '../../Register/register';
import axios from 'axios';
import '../Dashboard';
import Pagination from "react-js-pagination";
// /import Pagination from '@material-ui/lab/Pagination';


const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto;",
  },
  table: {
    minWidth: 300,
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
  reacthtmltabletoexcel:{
    float:"right",
    padding:"8px",
    paddingLeft:"15px",
    paddingRight:"15px",
    borderRadius:"9%",
    backgroundColor:"#f50057",
    color:"white",
    marginTop:"-2.2%",
    fontFamily:"'Trade Winds', cursive",

  }
 
});



class  SimpleTable extends Component{
  constructor(props){
    super(props)
    this.state={ 
      user:[
        ''
      ],
      mobileOpen: false,
      anchorEl: null,
      mobileMoreAnchorEl: null,
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 4,
      pageRangeDisplayed: 3,
      logout:this.props.opened,
      
    }

  }

  
  componentDidMount = () => {
   
       axios.get('/api/student/students/get',{
          headers: {
              "Authorization": "Bearer"+localStorage.getItem('jwt')
          }
            }).then(res => {
            this.setState({
              user: res.data.data
            });
            
        });
 
   
}


      handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
        axios.get('/api/student/students/get?page=' + pageNumber,{
          headers: {
              "Authorization": "Bearer"+localStorage.getItem('jwt')
          }
      }).then(res => {
            this.setState({
                user: res.data.data,
                itemsCountPerPage: res.data.per_page,
                totalItemsCount: res.data.total,
                activePage: res.data.current_page
            });

        });
    }

  render(){

  
  const { classes } = this.props;

  var total=0 ;
  // let due=0;
 
  
        return (
          <>
           {this.props.renderMenu}
           {this.props.renderMobileMenu}
          <Paper className={classes.root}>
              
            <Register/>

            <ReactHTMLTableToExcel
                id="test-table-xls-button"
                //className="btn btn-success float-right"
                className={classes.reacthtmltabletoexcel}
                table="table-to-xls"
                filename="tablexls"
                sheet="tablexls"
                buttonText="Download as XLS"/>
            
            <Table className={classes.table} id="table-to-xls">
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell align="right">Last Name</TableCell>
                  <TableCell align="right">Father Name</TableCell>
                  <TableCell align="right"> Mother Name</TableCell>
                  <TableCell align="right"> Phone Number</TableCell>
                  <TableCell align="right"> Class</TableCell>
                  <TableCell align="right"> Section</TableCell>
                  <TableCell align="right">Date of Birth</TableCell>
                  <TableCell align="right"> Admission Fees</TableCell>
                  <TableCell align="right">Due Fees</TableCell>
                  <TableCell align="right">Total Fees</TableCell>
                  

                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.user.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.firstname==null?<div className="spinner-grow text-danger"></div>:row.firstname}
                    </TableCell>
                    <TableCell align="right" > {row.lastname==null?<div className="spinner-grow text-danger"></div>:row.lastname}</TableCell>
                    <TableCell align="right" > {row.fathername==null?<div className="spinner-grow text-danger"></div>:row.fathername}</TableCell>
                    <TableCell align="right" > {row.mothername==null?<div className="spinner-grow text-danger"></div>:row.mothername}</TableCell>
                    <TableCell align="right" > {row.phonenumber==null?<div className="spinner-grow text-danger"></div>:row.phonenumber}</TableCell>
                    <TableCell align="right" > {row.class==null?<div className="spinner-grow text-danger"></div>:row.class}</TableCell>
                    <TableCell align="right" > {row.section==null?<div className="spinner-grow text-danger"></div>:row.section}</TableCell>
                    <TableCell align="right" > {row.dateofbirth==null?<div className="spinner-grow text-danger"></div>:row.dateofbirth}</TableCell>
                    <TableCell align="right" > {row.admissionfees==null?<div className="spinner-grow text-danger"></div>:row.admissionfees}</TableCell>
                    <TableCell align="right" > { row.admissionfees -2000===''?<div className="spinner-grow text-danger"></div>:row.admissionfees -2000}</TableCell>
                    <TableCell align="right" > {total = total + row.admissionfees===''?<div className="spinner-grow text-danger"></div>:total = total + row.admissionfees}</TableCell>
                  </TableRow>
                  ))
                  } 
              </TableBody>
            </Table>
            
           
          </Paper>

              <div className="d-flex justify-content-center mt-2">
              <Pagination
                  activePage={this.state.activePage}
                  itemsCountPerPage={this.state.itemsCountPerPage}
                  totalItemsCount={this.state.totalItemsCount}
                  pageRangeDisplayed={this.state.pageRangeDisplayed}
                  onChange={this.handlePageChange}
                  itemClass="page-item"
                  linkClass="page-link"
                  variant="outlined" 
                  color="secondary"
              />
              </div>   

              </>
        );
                
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
