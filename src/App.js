import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/postItem';
import NotFound from './components/404';
import Conditional from './components/conditional';
import PureComp from './components/pureComp';
import User from './components/user';

const App = () => {
  return(
    <BrowserRouter>
      <header>
        <div className="d-flex flex-column flex-md-row align-item-center p-3 px-md-4 mb-3 border-bottom">
          <h5 className="my-0 mr-md-auto font-weight-normal">Route Demo</h5>
          <nav className="my-2 my-md-0 mr-md-3">
            <NavLink                
              to="/"
              className="p-2 text-dark"
              activeStyle={{fontWeight:'bold'}}
              activeClassName="selected"
              exact
            >
              Home
            </NavLink>
            <NavLink 
              className="p-2 text-dark" 
              to="/posts"
              activeStyle={{fontWeight:'bold'}}
              activeClassName="selected"
            >
                Posts
            </NavLink>
            <NavLink 
              className="p-2 text-dark" 
              activeStyle={{fontWeight:'bold'}}
              activeClassName="selected"
              to="/profile" 
            >
              Profile
            </NavLink>
            <NavLink 
              className="p-2 text-dark" 
              activeStyle={{fontWeight:'bold'}}
              activeClassName="selected"
              to="/conditional" 
            >
              Conditional
            </NavLink>
            <NavLink 
              className="p-2 text-dark" 
              activeStyle={{fontWeight:'bold'}}
              activeClassName="selected"
              to="/pure-comp" 
            >
              Pure Component
            </NavLink>
            <NavLink 
              className="p-2 text-dark" 
              activeStyle={{fontWeight:'bold'}}
              activeClassName="selected"
              to="/user" 
            >
              User
            </NavLink>                             
          </nav>
        </div>
        <hr />
      </header>
      <div className="container">
        <Switch>
          {/*<Redirect from="/profile" to="/" />*/}
          <Route path="/posts" component={Posts} />
          <Route path="/profile" component={Profile} />
          <Route path="/posts/:id" component={PostItem} />
          <Route path="/conditional" component={Conditional} />
          <Route path="/pure-comp" component={PureComp} />
          <Route path="/user" component={User} />
          <Route path="/" component={Home} exact />  
          <Route path="" component={NotFound} />        
        </Switch>
      </div>
    </BrowserRouter>    
  ) 
}


export default App;