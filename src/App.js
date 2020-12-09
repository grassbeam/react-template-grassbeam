import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Pages from "./Page";
import withAuthentication from './Component/HighOrder/withAuthentication';

const HOCPages = {
  Home: withAuthentication(Pages.Home, "Home Sweet Home", true),
  Login: withAuthentication(Pages.Login, "Login Page", true),
  Content: withAuthentication(Pages.Content, "Content"),
}


function App() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <BrowserRouter>
        <Switch>
              <Route exact path="/" component={HOCPages.Home} />
              <Route exact path="/login" component={HOCPages.Login} />
              <Route exact path="/content" component={HOCPages.Content} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
