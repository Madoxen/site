import React from 'react';
import PostContainer from './PostContainer'
import Ribbon from './Ribbon'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AdminPanel from './AdminPanel';


class App extends React.Component {
  constructor(props : any) {
    super(props);
  }


  render() {
    return (

      <Router>
        <Switch>

        <Route path="/admin">
            <div className="App">
              <AdminPanel />
            </div>
          </Route>

          <Route path="/">
            <div className="App">
              <Ribbon></Ribbon>
              <PostContainer />
            </div>
          </Route>
          
        </Switch>
      </Router>


    );
  }
}



export default App;
