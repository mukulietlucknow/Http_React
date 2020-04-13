import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import {Link} from 'react-router-dom';

class Posts extends Component {

    state={
        posts:[]
    }

    postSelectedHandler = (id) => {
        this.setState({seletedId: id})
    }

    componentDidMount(){
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
        }).catch(error => {
            console.log(error);
        });

    }


    render () {
        let posts = <p>sth went wrong</p>;
        if(!this.state.error){
            posts  = this.state.posts.map(post => {
                return <Link to={'/'+post.id} key={post.id}>
                <Post  
                 
                title={post.title} 
                author={post.author} 
                clicked={() => this.postSelectedHandler(post.id)}/>
                </Link>
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