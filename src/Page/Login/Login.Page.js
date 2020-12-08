import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  formRoot: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& .button-container': {
        display: 'inline-flex',
        marginTop: theme.spacing(2),
    }
  },
  container: {
      marginTop: "15ch",
  },
});



class LoginPage extends Component {

    constructor(props) {
        super(props)
        const { classes } = props
        this.FormID = ["Username", "Password"]
        this.state = {
            isFormValid: false,
            FormError: {},
            FormValue: {
                [this.FormID[0]]: "",
                [this.FormID[1]]: "",
            }
        }
    }

    handleChangeForm(id, event) {
        this.setState({
            ...this.state,
            FormValue: {
                ...this.state.FormValue,
                [id]: event.target.value
            }
        });
    }

    render() {
        return(
            <React.Fragment>
                <Container className={this.props.classes.container} maxWidth="sm">
                    <Box border={1} color="text.secondary">
                        <form className={this.props.classes.formRoot}  noValidate autoComplete="off">                
                            <TextField
                                        id={"text-"+this.FormID[0]}
                                        label="Username"
                                        value={this.state.FormValue[this.FormID[0]]}
                                        onChange={(event)=>this.handleChangeForm(this.FormID[0], event)}
                                        error={!!(this.state.isFormValid && this.state.FormError[this.FormID[0]])}
                                        helperText={this.state.FormError[this.FormID[0]]||""}
                                        variant="outlined"
                                    />
                            <TextField
                                        id={"text-"+this.FormID[1]}
                                        label="Password"
                                        type="password"
                                        value={this.state.FormValue[this.FormID[1]]}
                                        onChange={(event)=>this.handleChangeForm(this.FormID[1], event)}
                                        error={!!(this.state.isFormValid && this.state.FormError[this.FormID[1]])}
                                        helperText={this.state.FormError[this.FormID[1]]||""}
                                        autoComplete="current-password"
                                        variant="outlined"
                                    />
                            <div className="button-container">
                                <Button 
                                        variant="contained" 
                                        color="primary"
                                        
                                > 
                                Sign In 
                                </Button>
                            </div>
                        </form>
                    </Box>
                </Container>
            </React.Fragment>
        );
    }
}

export default withStyles(styles, { withTheme: true })(LoginPage);