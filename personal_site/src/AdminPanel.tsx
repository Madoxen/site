import React, { Component } from 'react';
import PostContainer from './PostContainer'
import Ribbon from './Ribbon'
import PostEditor from './Admin/PostEditor'

type AdminPanelProps = {
  chosenPostID : string;
}

class AdminPanel extends Component<{}, AdminPanelProps> {
  constructor(props : AdminPanelProps) {
    super(props);
    this.state = { chosenPostID: "" };
  }



  onCreateNewPostClicked()
  {
    
  }


  render() {
    return (
      <div className="App">
        <Ribbon></Ribbon>
        <button>Create new post</button>
        <PostContainer isAdmin={true}></PostContainer>
      </div>
    );
  }
}



export default AdminPanel;
