import React, { ChangeEvent, Component } from 'react';
import PostContainer from '../PostContainer'
import Ribbon from '../Ribbon'
import Post from '../Post'
import './PostEditor.css'


type PostEditorState = {
    title : string;
    code : string;
}

class PostEditor extends Component<{}, PostEditorState> {   //No props, but with state

    constructor(props : PostEditorState) {
        super(props);
        this.state = { title: "", code: "" };
        this.onCodeChanged = this.onCodeChanged.bind(this);
        this.onTitleChanged = this.onTitleChanged.bind(this);
    }

    onCodeChanged(event : ChangeEvent<HTMLTextAreaElement>) {
        this.setState({ code: event.target.value });
    }

    onTitleChanged(event : ChangeEvent<HTMLInputElement>) {
        this.setState({ title: event.target.value })
    }

    render() {
        return (
            <div className="App">
                <Post title={this.state.title} date={new Date().getDate().toString()} contents={this.state.code}></Post>
                <input type="text" value={this.state.title} onChange={this.onTitleChanged}></input>
                <textarea className="PostEditor-EditField" value={this.state.code} onChange={this.onCodeChanged} ></textarea>
            </div>
        );
    }
}

export default PostEditor;