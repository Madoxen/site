import React from 'react';
import './Post.css'

//This is post component that represents one post
class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Post">
        <h1>{this.props.title}</h1>  {/* post title */}
        <p>{this.props.date}</p> {/*post date*/}
        <p>{this.props.content}</p>  {/* post content */}
      </div>
    );
  }
}

export default Post;