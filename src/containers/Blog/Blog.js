import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import {Route, NavLink, Switch} from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {    

    render () {      
        
        return (
            <div className="BlogPost">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to='/'  activeStyle={{
                                    textDecoration : 'underline'
                                    }} exact>Home</NavLink>                                
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: '/new-post',
                                    // hash: '#submit',
                                    // search: '?quick-submit=true',
                                }} activeStyle={{
                                    textDecoration : 'underline'
                                    }} exact>New</NavLink>                                
                            </li>
                        </ul>
                    </nav>
                </header>

                {/* <Route path="/" exact render={() => <h1>Home</h1>}/> */}
                {/* <Posts/>              */}
                <Route path="/" exact  component={Posts}/>
                <Switch>                    
                    <Route path="/new-post" exact  component={NewPost}/>
                    <Route path="/:id" exact  component={FullPost}/>
                </Switch>
                
            </div>
        );
    }
}



export default Blog;