import React, { Component } from 'react';
import './Post.css'


export type PostProps = {
  title : string;
  date : string;
  contents : string;
}

//This is post component that represents one post
class Post extends Component<PostProps> {
  constructor(props : PostProps) {
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