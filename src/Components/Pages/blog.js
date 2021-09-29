import React from "react";
import {useParams} from "react-router-dom";
import posts from "../../data/posts.json"

function Blog (){
    const {id}=useParams();

    const selected = posts.find((post)=>{
        return post.id === id;
    });

    return (
        <div>
            <h2>{selected.id}{selected.title}</h2>
            <p>{selected.content}</p>
        </div>
    );
}

export default Blog;