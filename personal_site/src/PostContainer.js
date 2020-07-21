import React from 'react';
import './Post.css'
import Post from './Post'

//This is post component that represents one post
class PostContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="PostContainer">
        <Post date="12.13.2020" title="My second post!" content="This is my second post! Nice!"/>
        <Post date="12.12.2020" title="My first post!" content="This is my first post! Nice!"/>
      </div>
    );
  }
}

export default PostContainer;