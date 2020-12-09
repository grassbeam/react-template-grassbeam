import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import * as UserStorage from '../../../Data/User/User.DataStorage';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const mapStateToProps = state => ({
    ...state
  });

 function MainHeader (props) {
    const classes = useStyles();
    const { PageTitle, SignOutHandler } = props;
    const isLogin = UserStorage.isAuthenticated(props);

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                { PageTitle }
                </Typography>
                {
                    isLogin?
                    <Button color="inherit" onClick={()=>SignOutHandler()} >Logout</Button>
                    :
                    <Button color="inherit" onClick={()=>props.history.push("/login")} >Login</Button>
                }
                
            </Toolbar>
        </AppBar>
    );
}


export default withRouter(connect(mapStateToProps)(MainHeader));