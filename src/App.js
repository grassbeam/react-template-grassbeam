import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Pages from "./Page";

function App() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <BrowserRouter>
        <Switch>
              <Route exact path="/" component={Pages.Home} />
              <Route exact path="/login" component={Pages.Login} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
