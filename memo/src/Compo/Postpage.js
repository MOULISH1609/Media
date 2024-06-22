import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Postpage=({posts,handledeltlete})=>{
const {id}=useParams();
const post=posts.find(post=>(post.id).toString()===id);
    return(<main className="Postpage">
        <article className="post">
           {post && <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/edit/${post.id}`}>
                <button>Edit Post</button>
                <button onClick={()=>handledeltlete(post.id)}>Delete Post</button>
                </Link>
                
                </> }
                {!post &&
                <>
            <h2>Post not found</h2>
           <p>Well, that's Dissappointing</p>
           <p>
          <Link to='/'>Visit Our Homeapge</Link>
         </p>
         </> }
        </article>
        
    </main>
    )
}
export default Postpage;