import React from "react";
import { useEffect } from "react";
import { useParams,Link } from "react-router-dom";

const Edit=({posts,handleEdit,editBody,setEditBody,editTitle,setEditTitle})=>{
    const{id}=useParams();
    const post=posts.find(post=>(post.id).toString()=== id);
    
    useEffect(()=>{
        if(post){
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    },[post,setEditTitle,setEditBody])
    return(
       <main className="NewPost">
        {editTitle &&
        <>
        <h2>Edit Post</h2>
        <form className="newPostForm" onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="postTitle">Title:</label>
        <input id="postTitle" type="text" required value={editTitle} onChange={(e)=>setEditTitle(e.target.value)}/>
        <label htmlFor="postBody">post :</label>
        <textarea id="postBody"  required value={editBody} onChange={(e)=>setEditBody(e.target.value)}/>
        <button type="sibmit" onClick={(e)=>handleEdit(post.id)}>submit</button>
        </form>
        </>
    }
    {!editTitle &&
    <>
    <h2>Post not found</h2>
    <p>Well, that's Dissappointing</p>
    <p>
    <Link to='/'>Visit Our Homeapge</Link>
    </p>
    </>
}
       </main>
        )
}
export default Edit;
