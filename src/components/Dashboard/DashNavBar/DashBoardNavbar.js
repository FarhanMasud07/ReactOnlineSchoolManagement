import React from 'react';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import {Link,withRouter} from 'react-router-dom';
import { compose } from 'recompose';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PaymentIcon from '@material-ui/icons/Payment';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';




const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    backgroundColor:"#283593"
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },

  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputRoot: {
    color: 'inherit',
    width: '100%',
  },

  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },

  grow: {
    flexGrow: 1,
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  l1:{
      backgroundColor:"#283593",
      color:'white',
      borderRadius:'.5rem',
      marginBottom:'0.1rem',
      '&:hover': {
        backgroundColor: '#7e57c2',
        color:"white"
      },
  },
  l2:{
    color:'white',
    marginRight:".1rem"
  },
  l3:{
    backgroundColor:"red",
    borderRadius:'.5rem',
    marginBottom:'0.1rem',
    marginTop:'1rem'
},
  

});

function TabContainer(props) {
  return (
    <Typography>
      {props.children}
     </Typography>
      
    
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


class ResponsiveDrawer extends React.Component {
  state = {
    value: 0,
    logoutoption:this.props.clicked,
    Monthlykhulo:false,
    Anualkhulo:false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  anualstudenfees = () =>{
        alert('hi')
       
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleClick = () => {
    this.setState({
      Monthlykhulo:!this.state.Monthlykhulo,
      
    })
  };

  handleAnualKhuloClick = () =>{
      this.setState({
        Anualkhulo:!this.state.Anualkhulo
      })
  }



  render() {
    const { classes, theme } = this.props;
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button onClick={this.handleAnualKhuloClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Student Fees" />
                  {this.state.Anualkhulo ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.Anualkhulo} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested} component={Link} to='/Dashboard/DashBoardTable' className={classes.l1}>
                    <ListItemIcon>
                      <AccountBalanceIcon className={classes.l2}/>
                    </ListItemIcon>
                    <ListItemText primary="Anual Fees" />
                  </ListItem>
                </List>
              </Collapse>
              <Collapse in={this.state.Anualkhulo} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested} component={Link} to='/Dashboard/details' className={classes.l1}>
                    <ListItemIcon>
                      <PaymentIcon className={classes.l2}/>
                    </ListItemIcon>
                    <ListItemText primary="Monthly Fees" />
                  </ListItem>
                </List>
              </Collapse>
              <ListItem button onClick={this.handleClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Others" />
                  {this.state.Monthlykhulo ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.Monthlykhulo} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                  </ListItem>
                </List>
              </Collapse>
        </List>
        <Divider />
      </div>
    );

    

    const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={isMenuOpen}
          onClose={this.handleMenuClose}
        >
          <MenuItem >Profile</MenuItem>
          <MenuItem onClick={this.state.logoutoption}>Log Out</MenuItem>
        </Menu>
      );
  
      const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={isMobileMenuOpen}
        >
          <MenuItem onClick={this.handleProfileMenuOpen}>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </Menu>
      );
  

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              DashBoard
            </Typography>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>

            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        
        {renderMenu}
        {renderMobileMenu}

        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
              {this.props.children}   
              
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
  withStyles(styles, { withTheme: true })

)(ResponsiveDrawer)

