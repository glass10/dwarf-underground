import React, { Component } from 'react';
import './article.css';
import Author from './author'
import Body from './body'

class Article extends Component{
    constructor(){
        super()
        this.state = {
            showComments: false
        }
    }

    toggleComments(ev){
        ev.preventDefault();
        this.setState({ showComments: !this.state.showComments});
    }
    render(){
        return(
        <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <Author />
            <Body />

            <div className="article-links">
            <a className="article-link" href="#" onClick={this.toggleComments.bind(this)}>
                <i className="fa fa-comments-o"></i>
                <span className="article-link-text">Comments</span>
            </a>
            <a className="article-link" href="#">
                <i className="fa fa-share"></i>
                <span className="article-link-text">Share Post</span>
            </a>
            </div>
            {this.state.showComments ? <p>Comments!</p>:null}
        </div>
        )
    }
}

export default Article;