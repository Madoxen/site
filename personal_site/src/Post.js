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
        <h1 className="Post-Header">{this.props.title}</h1>  {/* post title */}
        <p className="Post-Date">{this.props.date}</p> {/*post date*/}
        <div dangerouslySetInnerHTML={{__html: this.props.contents}}></div>  {/* post content */}
      </div>
    );
  }
}

export default Post;