import React from "react";
import Feed from "./Feed";
const Home=({posts})=>{
    return(<div className="Home">
    <main>
        {posts.length ? (
            <Feed posts={posts}/>
        ):(
            <p style={{marginTop:"2rem"}}>
                Sorry ,No Post

            </p>
        )}
        
    </main>
    </div>
    )
}
export default Home;
