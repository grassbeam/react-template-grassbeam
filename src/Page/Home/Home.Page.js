import React, { Component } from 'react';
import AnonnHomePage from './Home.Anonymous.Page';
import AuthenticatedHomePage from './Home.Authenticated.Page';


class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false
        }
    }


    render() {
        return(
            <React.Fragment>
                {
                    this.state.isLogin?
                    <AuthenticatedHomePage />
                    :
                    <AnonnHomePage />
                }
            </React.Fragment>
        );
    }
}

export default HomePage;