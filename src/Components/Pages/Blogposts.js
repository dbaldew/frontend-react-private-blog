import React from "react";
import posts from '../../data/posts.json'
import {Link} from "react-router-dom";

function Blogposts() {

    return (
            <div>
                <h2>Blogposts</h2>
                <p>Aantal posts:{posts.length}</p>
                <ul>
                    {posts.map((post)=>{
                        return <li>
                            <Link to={`blog/${post.id}`}>
                               <h2>{post.id}:  {post.title}</h2>
                            </Link>
                        </li>
                    })}
                </ul>

            </div>
    );
}

export default Blogposts;