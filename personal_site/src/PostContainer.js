import React from 'react';
import './Post.css'
import Post from './Post'


//This is post component that represents one post
class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: {} };
  }

  componentDidMount()
  {
    this.fetchAllPosts();
  }


  render() {

    var p = [];
    if (this.state.posts != null) {
      for (var post in this.state.posts) {
        const currPost = this.state.posts[post];
        p.push(currPost);
      }
    }
    else if(this.state.posts == {})
    {
      p = <p>Loading posts...</p>
    }
    else {
      p = <p>Something went wrong :(</p>
    }

    var htmledPosts = p.map((post) => <Post date={post.date} title={post.title} contents={post.contents}/>)
    return (
      <div className="PostContainer">
        {htmledPosts}
      </div>
    );
  }


  //Fetches all posts from the backend
  fetchAllPosts() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/api/BlogEntries", true);
    xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    var postContainer = this;
    xhttp.onreadystatechange = function () { // Call a function when the state changes.
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        postContainer.setState({ posts: JSON.parse(xhttp.response) });
        return;
      }
    }
    xhttp.send();
  }

}

export default PostContainer;