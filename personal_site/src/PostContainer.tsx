import React from 'react';
import './Post.css'
import Post from './Post'
import AdminPost from './Admin/AdminPost';



type PostContainerProps =
{
  isAdmin? : boolean;
}

type PostContainerState = {
  posts : RawPostData[];
}

type RawPostData = 
{
  id: string;
  date: string;
  contents : string;
  title : string;
}

//This is post component that represents one post
class PostContainer extends React.Component<PostContainerProps, PostContainerState> {
  constructor(props : PostContainerProps) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
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


    var htmledPosts = null;
    if (this.props.isAdmin === true) {
      htmledPosts = p.map((post) => <AdminPost key={post.id} date={post.date} title={post.title} contents={post.contents} />)
    }
    else {
      htmledPosts = p.map((post) => <Post key={post.id} date={post.date} title={post.title} contents={post.contents} />)
    }


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