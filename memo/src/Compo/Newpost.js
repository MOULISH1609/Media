import React from "react";
const Newpost=({handleSubmit,postTitle,setPostTitle,postbody,setPostBody})=>{

    return(<main className="Newpost">
        <h2>Newpost</h2>
        <form className="Newpostform" onSubmit={handleSubmit}>
            <label htmlFor="postTitle">Title</label>
            <input id="postTitle" 
            type="text" 
            required
            value={postTitle}
            onChange={(e)=>setPostTitle(e.target.value)}/>
            <textarea id="Postbody"
            type="type"
            required
            value={postbody}
            onChange={(e)=>setPostBody(e.target.value) }/>
            <button type="submit">Submit</button>
            </form>

    </main>)
}
export default Newpost;
