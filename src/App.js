import React from 'react';
import ComponentNavbar from './components/layouts/navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Home from './components/layouts/home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ComponentNavbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Signin} />
            <Route path="/join" component={Signup} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
