import React from 'react';
import PostContainer from './PostContainer'
import './App.css';


function App() {
  return (
    <div className="App">
      <p>it's me!</p>
      <PostContainer posts={FetchAllPosts()}/>
    </div>
  );
}


//Fetches all posts from the backend
function FetchAllPosts() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:5000/api/BlogEntries");
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
  xhttp.onreadystatechange = function () { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      return JSON.parse(xhttp.response);
    }
  }
  xhttp.send();
}

export default App;
