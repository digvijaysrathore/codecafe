import React from 'react';
import ComponentNavbar from './components/layouts/navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import PostDetails from './components/posts/postDetails';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Write from './components/posts/createPost';
import ComponentFooter from './components/layouts/footer';
import Wall from './components/chat/wall';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ComponentNavbar />
          <Switch>
            <Route exact path="/dash" component={Dashboard} />
            <Route path="/post/:id" component={PostDetails} />
            <Route path="/login" component={Signin} />
            <Route path="/join" component={Signup} />
            <Route path="/write" component={Write} />
            <Route path="/" component={Wall} />
          </Switch>
          <ComponentFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
