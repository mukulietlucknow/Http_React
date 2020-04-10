import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import {Route, Link} from 'react-router-dom';
import NewPost from './NewPost/NewPost';

class Blog extends Component {    

    render () {      
        
        return (
            <div className="BlogPost">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>                                
                            </li>
                            <li>
                                <Link to={{
                                    pathname: 'new-post',
                                    // hash: '#submit',
                                    // search: '?quick-submit=true',
                                }}>New</Link>                                
                            </li>
                        </ul>
                    </nav>
                </header>

                {/* <Route path="/" exact render={() => <h1>Home</h1>}/> */}
                {/* <Posts/>              */}
                <Route path="/" exact  component={Posts}/>
                <Route path="/new-post" exact  component={NewPost}/>
            </div>
        );
    }
}

{/* <section>
                    <FullPost id={this.state.seletedId}/>
                </section>
                <section>
                    <NewPost />
                </section> */}

export default Blog;