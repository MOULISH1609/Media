import React from "react";
import { Link } from "react-router-dom";
const Nav=({search,setSearch})=>{
    return(<div className="Nav">
    <main>
        <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="Search">Search</label>
            <input id="search" type="text" role="searchbox"
            placeholder="Search..."
            value={search} onChange={(e)=>setSearch(e.target.value)}/>
            </form>
            <Link to="/" >Home</Link>
            <Link to="/Post">Post</Link>
            <Link to="/About">About</Link>
             </main>
             </div>
             )
}
export default Nav;