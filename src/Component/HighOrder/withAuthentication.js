import React, { PureComponent, lazy } from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import MainComponent from '../Main/Main.Component';
import * as UserStorage from "../../Data/User/User.DataStorage.js";



export default function(PageComponent, PageTitle="", isAllowAnonymous=false) {


  const mapStateToProps = state => ({
    ...state
  });

  class HOC extends PureComponent {

    constructor(props) {
        super(props);

      this.state ={
        isLogin: UserStorage.isAuthenticated(props),
        UserLogin: "",
        isLoadingState: false,
        isError: false,
      };
    }


    showLoaderSpinner = (isShowing) => {
        this.setState({
          isLoadingState: isShowing
        });
    }

    doHandlingSignOut = (e) => {
      e.preventDefault();
      // Log.debugStr("DO HANDLING SIGNOUT HOC !");
      // FETCH SOMETHING TO LOGOUT ?
      this.props.dispatch(UserStorage.removeAuthenticatedUser());
      this.setState({
        isLogin: false,
        userLogin: "",
      })
      // handleSignOut();
    }

    doHandlingSignIn = () => {
      this.createMenuItem();
      this.setState({
        isLogin: UserStorage.isAuthenticated(this.props),
        userLogin: this.userLogin,
      });
    }


    render() {
       
       var Comp;
       if (this.state.isLogin || isAllowAnonymous) {
         Comp = PageComponent;
       } else {
         Comp = ()=>"";
         this.props.history.push("/login");
       }

        return (
          <MainComponent 
            PageTitle={ PageTitle }
            ContainerClass="something" 
            UserLogin={this.state.UserLogin}
            SignOutHandler={this.doHandlingSignOut.bind(this)}
          >
            <Comp {...this.props} ShowLoaderSpinner={this.showLoaderSpinner.bind(this)} onSignIn={this.doHandlingSignIn.bind(this)} />
          </MainComponent>
        );
    }

  }

  return withRouter(connect(mapStateToProps)(HOC));
}