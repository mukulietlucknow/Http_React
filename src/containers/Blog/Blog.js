import React, { Component } from 'react';
// import axios from 'axios';
import Post from '../../components/Post/Post';
import axios from '../../axios';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state={
        posts:[],
        seletedId: null,
        error : false,
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
            console.log(updatedPost);
        }).catch(error => {
            console.log(error);
            this.setState({error : true})
        });

    }

    postSelectedHandler = (id) => {
        this.setState({seletedId: id})
    }

    render () {
        let posts = <p>sth went wrong</p>;
        if(!this.state.error){
            posts  = this.state.posts.map(post => {
                return <Post key={post.id} title={post.title} author={post.author} clicked={() => this.postSelectedHandler(post.id)}/>
            })
        }
        
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.seletedId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;