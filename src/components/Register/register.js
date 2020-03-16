// import React, { Component } from 'react'
// import axios from 'axios';
// import Button from '@material-ui/core/Button';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';

// const styles = theme => ({
//     button: {
//       margin: theme.spacing.unit,
//       width:'100%',
//       //alignItem:"center"
//     },
//     input: {
//       display: 'none',
//     },
//   });

// export class Register extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         firstname:null,
    //         lastname:null,
    //         fathername:null,
    //         class:null,
    //         mothername:null,
    //         phonenumber:null,
    //         section:null,
    //         admissionfees:null,
    //         dateofbirth:null,
    //         failedmessage:'',
    //         successmessage:''
    //     }
        
    // }

    // onTextChange = (event) =>{
    //     this.setState({
    //         [event.target.name]:event.target.value
    //     })
        
    //     console.log(this.state);
    // }

    // signUp = () =>{

    //     if((this.state.firstname
    //         &&this.state.lastname
    //         &&this.state.fathername
    //         &&this.state.mothername
    //         &&this.state.class
    //         &&this.state.section
    //         &&this.state.phonenumber
    //         &&this.state.dateofbirth
    //         &&this.state.admissionfees)== null){
    //         this.setState({
    //             failedmessage:'Please Provide the Empty Field'
    //         })

    //     }else{
    //         const registerData = {
    //             firstname:this.state.firstname,
    //             lastname:this.state.lastname,
    //             fathername:this.state.fathername,
    //             mothername:this.state.mothername,
    //             class:this.state.class,
    //             section:this.state.section,
    //             phonenumber:this.state.phonenumber,
    //             dateofbirth:this.state.dateofbirth,
    //             admissionfees:this.state.admissionfees
    //         }

    //         axios.post("/api/student/students/post",registerData,{
    //             headers:{
    //                 "Authorization": "Bearer"+localStorage.getItem('jwt')
    //             }
    //         })
    //         .then(result => {
    //         this.setState({
    //             successmessage:result.data.Message
    //         })
    //             //alert(result.data.Message);
    //         })
    //         .catch(e => {
    //             console.log(e)
    //         })
    //     }

        
        

    // }
 

//     render() {
//         const { classes } = this.props;
//         return (
//             <div className="container">
//                  <h2 className="col-9 mx-auto col-md6 col-lg-3 my-5 text-sm-center">Student Admission Register</h2>
                
//                     <b className="bg-primary text-white">{}
                            
//                     </b>
//                     <label>First name</label><br/>
//                     <span className="text-danger">{this.state.failedmessage}</span>
//                     <input type="text" name="firstname" className="form-control" onChange={this.onTextChange}/>
                   

//                     <label>Last Name</label><br/>
//                     <span className="text-danger">{this.state.failedmessage}</span>
//                     <input type="text" name="lastname" className="form-control" onChange={this.onTextChange}/>

//                     <label>Father Name</label><br/>
//                     <span className="text-danger">{this.state.failedmessage}</span>
//                     <input type="text" name="fathername" className="form-control" onChange={this.onTextChange}/>

//                     <label>Mother Name</label><br/>
//                     <span className="text-danger">{this.state.failedmessage}</span>
//                     <input type="text" name="mothername" className="form-control" onChange={this.onTextChange}/>

//                     <label>Class</label><br/>
//                     <span className="text-danger">{this.state.failedmessage}</span>
//                     <input type="text" name="class" className="form-control" onChange={this.onTextChange}/>

//                     <label>Section</label><br/>
//                     <span className="text-danger">{this.state.failedmessage}</span>
//                     <input type="text" name="section" className="form-control" onChange={this.onTextChange}/>

//                     <label>Phone Number</label><br/>
//                     <span className="text-danger">{this.state.failedmessage}</span>
//                     <input type="text" name="phonenumber" className="form-control" onChange={this.onTextChange}/>

//                     <label>Date of Birth</label><br/>
//                     <span className="text-danger">{this.state.failedmessage}</span>
//                     <input type="date" name="dateofbirth" className="form-control" onChange={this.onTextChange}/>

//                     <label>Admission Fees</label><br/>
//                     <span className="text-danger">{this.state.failedmessage}</span>
//                     <input type="number" name="admissionfees" className="form-control" onChange={this.onTextChange}/>
                    
//                     <Button variant="contained" color="primary" className={classes.button} onClick={this.signUp}>
//                         Save
//                     </Button>
//                     <span className="text-danger mt-5">{this.state.successmessage}</span>
                    
//             </div>
//         )
//     }
// }

// Register.propTypes = {
//   classes: PropTypes.object.isRequired,
// };


// export default withStyles(styles)(Register);

// import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
// import TextField from '@material-ui/core/TextField';
// import MaskedInput from 'react-text-mask';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import Button from '@material-ui/core/Button';
// import color from '@material-ui/core/colors/amber';

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//   },
//   dense: {
//     marginTop: 16,
//   },
//   menu: {
//     width: 200,
//   },
//   button: {
//           marginTop: "6rem",
//           width:'100%',
//           //alignItem:"center"
         
//         },
// });

// function TextMaskCustom(props) {
//     const { inputRef, ...other } = props;
  
//     return (
//       <MaskedInput
//         {...other}
//         ref={ref => {
//           inputRef(ref ? ref.inputElement : null);
//         }}
//         mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
//         placeholderChar={'\u2000'}
//         showMask
//       />
//     );
//   }

// const currencies = [
//   {
//     value: 'Full Payment',
//     label: 'Full Payment',
//   },
//   {
//     value: 'Partial Payment',
//     label: 'Partial Payment',
//   },
//   {
//     value: 'Special',
//     label: 'Special',
//   },
  
// ];

// class OutlinedTextFields extends React.Component {
//   state = {
//     name: 'Cat in the Hat',
//     textmask: '(+880  )    -    ',
    
//   };

// //   handleChange = name => event => {
// //     this.setState({
// //       [name]: event.target.value,
// //     });
// //   };

//   render() {
//     const { classes } = this.props;
//     const { textmask, numberformat } = this.state;
//     return (
      // <form className={classes.container} noValidate autoComplete="off">
      //     <div className="container form-group">
                // <TextField
                // id="outlined-name"
                // label="FirstName"
                // name="firstname"
                // className="form-control-range col-5 float-left"
                // //   value={this.state.name}
                // //   onChange={this.handleChange('name')}
                // margin="normal"
                // variant="outlined"
                // />
                // <TextField
                // id="outlined-name"
                // label="LastName"
                // name="lastname"
                // className="form-control-range col-5 float-right"
                // //   value={this.state.name}
                // //   onChange={this.handleChange('name')}
                // margin="normal"
                // variant="outlined"
                // />

                // <TextField
                // id="outlined-name"
                // label="FatherName"
                // name="fathername"
                // className="form-control-range col-5 float-left"
                // //   value={this.state.name}
                // //   onChange={this.handleChange('name')}
                // margin="normal"
                // variant="outlined"
                // />

                // <TextField
                // id="outlined-name"
                // label="MotherName"
                // name="mothername"
                // className="form-control-range col-5 float-right"
                // //   value={this.state.name}
                // //   onChange={this.handleChange('name')}
                // margin="normal"
                // variant="outlined"
                // />

                // <TextField
                // id="outlined-name"
                // label="Class"
                // name="class"
                // className="form-control-range col-5 float-left"
                // //   value={this.state.name}
                // //   onChange={this.handleChange('name')}
                // margin="normal"
                // variant="outlined"
                // />

                // <TextField
                // id="outlined-name"
                // label="Section"
                // name="section"
                // className="form-control-range col-5 float-right"
                // //   value={this.state.name}
                // //   onChange={this.handleChange('name')}
                // margin="normal"
                // variant="outlined"
                // />

                
                // {/* <TextField
                // id="outlined-name"
                // label="PhoneNumber"
                // name="phonenumber"
                // className="form-control-range"
                // //   value={this.state.name}
                // //   onChange={this.handleChange('name')}
                // margin="normal"
                // variant="outlined"
                // /> */}
              
                // <TextField
                // id="outlined-name"
                // //label="Date of Birth"
                // name="dateofbirth"
                // type="date"
                // className="form-control-range col-5 float-right"
                // //   value={this.state.name}
                // //   onChange={this.handleChange('name')}
                // margin="normal"
                // variant="outlined"
                // />
               

                // <TextField
                // id="outlined-name"
                // label="AdmissionFees"
                // name="addmissionfees"
                // className="form-control-range col-5 float-left bg-blue"
                
                // //   value={this.state.name}
                // //   onChange={this.handleChange('name')}
                // margin="normal"
                // variant="outlined"
                // />

                // <TextField
                // id="outlined-select-currency-native"
                // select
                // label="Please select payment type"
                // className="form-control-range "
                // helperText=" "
                // value={this.state.currency}
                // //   onChange={this.handleChange('currency')}
                // SelectProps={{
                //     native: true,
                //     MenuProps: {
                //     className: classes.menu,
                //     },
                // }}
                
                // margin="normal"
                // variant="outlined"
                // >
                // {currencies.map(option => (
                //     <option key={option.value} value={option.value}>
                //     {option.label}
                //     </option>
                // ))}

                // </TextField>

                //    {/* <InputLabel htmlFor="formatted-text-mask-input" >Provide Bd Phone Number</InputLabel> */}
                //    <Input
                //     value={textmask}
                //     // onChange={this.handleChange('textmask')}
                //     id="formatted-text-mask-input"
                //     inputComponent={TextMaskCustom}
                //     className="form-control-range "
                //     helperText="Provide Phone NUmber"
                   
                // />

//                     <Button variant="contained" color="primary" className={classes.button}>
//                                              Save
//                     </Button>
//                     <span className="text-danger mt-5"></span>
//                     {/* className={classes.button} onClick={this.signUp} */}
//                     {/* {this.state.successmessage} */}
                                

//           </div>
       
//       </form>
//     );
//   }
// }

// OutlinedTextFields.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(OutlinedTextFields);















import React from 'react';
import PropTypes from 'prop-types';
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
// import MaskedInput from 'react-text-mask';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import axios from 'axios';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  button:{
    //back
    //float:"right"
    // alignItem:"center"
    backgroundColor:"#827717",
    color:"white",
    marginBottom:"1rem",
  
  },
  personAddicon:{
      marginRight:"0.8rem"
  }
  
});

// const currencies = [
//   {
//     value: 'Full Payment',
//     label: 'Full Payment',
//   },
//   {
//     value: 'Partial Payment',
//     label: 'Partial Payment',
//   },
//   {
//     value: 'Special',
//     label: 'Special',
//   },
  
// ];

// function TextMaskCustom(props) {
//   const { inputRef, ...other } = props;

//   return (
//     <MaskedInput
//       {...other}
//       ref={ref => {
//         inputRef(ref ? ref.inputElement : null);
//       }}
//       mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
//       placeholderChar={'\u2000'}
//       showMask
//     />
//   );
// }

class DialogSelect extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        open: false,
        // textmask: '(+880  )    -    ',
        firstname:null,
        lastname:null,
        fathername:null,
        class:null,
        mothername:null,
        phonenumber:null,
        section:null,
        admissionfees:null,
        dateofbirth:null,
        failedmessage:'',
        successmessage:'',
        
      };
  }
 

  signUp = () =>{

    if((this.state.firstname
        &&this.state.lastname
        &&this.state.fathername
        &&this.state.mothername
        &&this.state.class
        &&this.state.section
        &&this.state.phonenumber
        &&this.state.dateofbirth
        &&this.state.admissionfees)== null){
        this.setState({
            failedmessage:'Please Provide the Empty Field',
            colors:"red"
        })

    }else{
        const registerData = {
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            fathername:this.state.fathername,
            mothername:this.state.mothername,
            class:this.state.class,
            section:this.state.section,
            phonenumber:this.state.phonenumber,
            dateofbirth:this.state.dateofbirth,
            admissionfees:this.state.admissionfees
        }

        axios.post("/api/student/students/post",registerData,{
            headers:{
                "Authorization": "Bearer"+localStorage.getItem('jwt')
            }
        })
        .then(result => {
        this.setState({
            successmessage:result.data.Message,
            
        })
            //alert(result.data.Message);
        })
        .catch(e => {
            console.log(e)
        })
    }
}

onTextChange = (event) =>{
  this.setState({
      [event.target.name]:event.target.value
  })
  
  //console.log(this.state);
}


  // handleChange = name => event => {
  //   this.setState({ [name]: Number(event.target.value) });
  // };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ 
      open: false,
      firstname:null,
      lastname:null,
      fathername:null,
      class:null,
      mothername:null,
      phonenumber:null,
      section:null,
      admissionfees:null,
      dateofbirth:null,
      failedmessage:'',
      successmessage:'',
    });
  };

  render() {
    const { classes } = this.props;
    // const { textmask, numberformat } = this.state;

    return (
      <div>
        <Button onClick={this.handleClickOpen} variant="contained"  color="secondary"><PersonAddIcon className={classes.personAddicon}/> Add Student</Button>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle>Fill the form</DialogTitle>
          <DialogContent>
            <form className={classes.container}>

             
            <TextField
                id="outlined-firstname"
                //label={this.state.failedmessage==='' ?this.state.default.FirstName:(this.state.failedmessage)}
                label="FirstName"
                name="firstname"
                className="form-control-range col-6 pr-2 float-left text-danger"
                //   value={this.state.name}
                onChange={this.onTextChange}
                margin="normal"
                variant="outlined"
                // style= {this.state.failedmessage==='' ?this.state.colors:this.state.colors}
                
                />
                <span className="text-danger">{this.state.failedmessage}</span>

                <TextField
                id="outlined-lastname"
                label="LastName"
                name="lastname"
                className="form-control-range col-6 pr-2  float-right"
                //   value={this.state.name}
                onChange={this.onTextChange}
                margin="normal"
                variant="outlined"
                />
                <span className="text-danger">{this.state.failedmessage}</span>

                <TextField
                id="outlined-fathername"
                label="FatherName"
                name="fathername"
                className="form-control-range col-6 pr-2 float-left"
                //   value={this.state.name}
                onChange={this.onTextChange}
                margin="normal"
                variant="outlined"
                />
                 <span className="text-danger">{this.state.failedmessage}</span>


                <TextField
                id="outlined-mothername"
                label="MotherName"
                name="mothername"
                className="form-control-range col-6 pr-2 float-right"
                //   value={this.state.name}
                onChange={this.onTextChange}
                margin="normal"
                variant="outlined"
                />
                <span className="text-danger">{this.state.failedmessage}</span>


                <TextField
                id="outlined-class"
                label="Class"
                name="class"
                className="form-control-range col-6 pr-2 float-left"
                //   value={this.state.name}
                onChange={this.onTextChange}
                margin="normal"
                variant="outlined"
                />
                 <span className="text-danger">{this.state.failedmessage}</span>

                <TextField
                id="outlined-section"
                label="Section"
                name="section"
                className="form-control-range col-6 pr-2 float-right"
                //   value={this.state.name}
                onChange={this.onTextChange}
                margin="normal"
                variant="outlined"
                />
                 <span className="text-danger">{this.state.failedmessage}</span>
                
                {/* <TextField
                id="outlined-name"
                label="PhoneNumber"
                name="phonenumber"
                className="form-control-range"
                //   value={this.state.name}
                //   onChange={this.handleChange('name')}
                margin="normal"
                variant="outlined"
                /> */}
              
                <TextField
                id="outlined-dateofbirth"
                //label="Date of Birth"
                name="dateofbirth"
                type="date"
                className="form-control-range col-6 pr-2 float-right"
                //   value={this.state.name}
                onChange={this.onTextChange}
                margin="normal"
                variant="outlined"
                />
                <span className="text-danger">{this.state.failedmessage}</span>

                <TextField
                id="outlined-admissionfees"
                label="AdmissionFees"
                name="admissionfees"
                className="form-control-range col-6 pr-2 float-left bg-blue"
                
                //   value={this.state.name}
                onChange={this.onTextChange}
                margin="normal"
                variant="outlined"
                />
                <span className="text-danger">{this.state.failedmessage}</span>

                <TextField
                id="outlined-name"
                label="PhoneNumber"
                name="phonenumber"
                className="form-control-range col-6 pr-2 float-left bg-blue"
                type="number"
                //   value={this.state.name}
                onChange={this.onTextChange}
                margin="normal"
                variant="outlined"
                />
                <span className="text-danger">{this.state.failedmessage}</span>

              

                {/* <TextField
                id="outlined-select-currency-native"
                select
                label="Please select payment type"
                className="form-control-range "
                helperText=" "
                value={this.state.currency}
                onChange={this.onTextChange}
                SelectProps={{
                    native: true,
                    MenuProps: {
                    className: classes.menu,
                    },
                }}
                
                margin="normal"
                variant="outlined"
                >
                {currencies.map(option => (
                    <option key={option.value} value={option.value}>
                    {option.label}
                    </option>
                ))}

                </TextField> */}
                <span className="text-danger">{this.state.successmessage}</span>

                   {/* <InputLabel htmlFor="formatted-text-mask-input" >Provide Bd Phone Number</InputLabel> */}
                   {/* <Input
                    value={textmask}
                    onChange={this.onTextChange}
                    id="formatted-text-mask-input"
                    inputComponent={TextMaskCustom}
                    className="form-control-range "
                    helperText="Provide Phone NUmber"
                    name="phonenumber"
                   
                  />
                   <span className="text-danger">{this.state.failedmessage}</span> */}
            </form>
            
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.signUp} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

DialogSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DialogSelect);