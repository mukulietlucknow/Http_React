import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {

    state={
        posts:[]
    }

    postSelectedHandler = (id) => {
        this.setState({seletedId: id})
    }

    componentDidMount(){
        console.log(this.props);
        axios.get('/posts')
        .then(response => {
            const posts = response.data.slice(0,4);
            const updatedPost = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
            });
            this.setState({posts:updatedPost});
            console.log(updatedPost);
        }).catch(error => {
            console.log(error);
            //this.setState({error : true})
        });

    }


    render () {
        let posts = <p>sth went wrong</p>;
        if(!this.state.error){
            posts  = this.state.posts.map(post => {
                return <Post  key={post.id} title={post.title} author={post.author} clicked={() => this.postSelectedHandler(post.id)}/>
            })
        }

        return (
            <div className ="Posts" >
                {posts}
            </div>
        )
    }
}

export default Posts;