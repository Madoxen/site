import React from 'react';
import PostContainer from './PostContainer'
import Ribbon from './Ribbon'
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render()
  {
    return (
      <div className="App">
        <Ribbon></Ribbon>
        <PostContainer/>
      </div>
    );
  }
}



export default App;
