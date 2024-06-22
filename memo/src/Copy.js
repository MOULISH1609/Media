import React, { useEffect, useState } from "react";
import './Copy.css'
import Home from "./Compo/Home";
import Header from "./Compo/Header";
import Nav from "./Compo/Nav";
import About from "./Compo/About";
import { Routes,Route, useNavigate } from "react-router-dom";
import Newpost from "./Compo/Newpost";
import Missing from "./Compo/Missing";
import {format} from 'date-fns';
//import Img from "./Compo/Img";
import Edit from "./Compo/Edit";
import Postpage from "./Compo/Postpage";
import Footer from "./Compo/Footer";
import api from"./api/news";
import useAxiosFetch from  './hooks/useAxiosFetch';


const Copy=()=>{
    const [posts,setPosts]=useState([]);
    const [search,setSearch]=useState('');
    const[SearchResults,setSearchResults]=useState([])
    const[postTitle,setPostTitle]=useState('')
    const[postbody,setPostBody]=useState('')
    const[editTitle,setEditTitle]=useState('')
    const[editBody,setEditBody]=useState('')
    const navigate = useNavigate ()
    const{data,fetchError,isLoading}=useAxiosFetch('http://localhost:3001/news')
   
        /*{id:1,title:"post1",datetime:"Sep 16 2023 2:15:06 am",body:"I'm Here"},
        {id:2,title:"New Reels",datetime:"May 15 2009 4:20:09 pm",body:"this my first reel"},
        {id:3,title:"Story",datetime:"Sep 19 2023 5:35:59 am",body:"First "},
        {id:3,title:"Story",datetime:"Sep 19 2023 5:35:59 am",body:"https://media.istockphoto.com/id/1487972668/photo/artificial-neural-network-abstract-technology-background.webp?b=1&s=170667a&w=0&k=20&c=h9jDLJZUi6NPQ34pXXKfAQa6gGGHyYFtL3QyJ0uS6hw="}
    ])*/

    useEffect(()=>{
        setPosts(data)
    },[data])

    useEffect(()=>{
        const fetchPost=async()=>{
            try{
                const response = await api.get('./news');
                setPosts(response.data);
            }catch (err) {
                if(err.response){
                    console.log(err.response.date);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else{
                     console.log(`Error:${err.message}`);
                }
                }
            }; fetchPost();
 },[])

 /*useEffect(() =>{
    const filterd = posts.filter((post)=>
       ((post.body).toLowerCase()).includes(search.toLowerCase()) || 
       ((post.title).toLowerCase()).includes(search.toLowerCase()));
      setSearchResults(filterd.reverse());
},[posts,search])   ;*/

useEffect(() =>{
    const filtered = posts.filter((post) => {
       const body = post.body ? post.body.toLowerCase() : '';
       const title = post.title ? post.title.toLowerCase() : '';
       return body.includes(search.toLowerCase()) || title.includes(search.toLowerCase());
    });
    setSearchResults(filtered.reverse());
}, [posts, search]);
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const id=posts.length ? (posts[posts.length-1].id+1) : 1;
        const datetime=format(new Date(),'MMMM dd,yyyy');
        const newpost={id,title:postTitle,datetime,body:postbody};
        try {
        const response = await api.post('./news',newpost)
        const allposts=[...posts,response.data];
        setPosts(allposts)
        setPostTitle('')
        setPostBody('')
        navigate('')
     }
     catch (err){
            console.log(`Error:${err.message}`);
        }
    }

    const handleEdit=async(id)=>{
        const datetime=format(new Date(), 'MMMM dd, yyyp');
        const updatedPost={id, title:editTitle, datetime, body:editBody}
        try {
            const response = await api.put(`./news/${id}`,updatedPost)
        setPosts(posts.map(post=>post.id===id ? {...response.data} :post))
        setEditTitle('');
        setEditBody('');
        navigate('/');
        }
     catch (err){
            console.log(`Error:${err.message}`);
        }
    }
    
    
    const handledeltlete=async(id)=>{
        try {
             await api.put(`./news/${id}`)
        const postsList=posts.filter(post=>post.id !== id);
        setPosts(postsList);
        navigate('/')
        }
        catch (err){
            console.log(`Error:${err.message}`);
        }
    }
return(<div className="Copy">
      <main>
        
       <Header title="MEDIA" />
       <Nav search={search} setSearch={setSearch}/>
       <Routes>
       < Route path="/" element={<Home posts={SearchResults} fetchError={fetchError} isLoading={isLoading}/> }/>
       <Route path="post">
         <Route index element={
      <Newpost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle}
       postbody={postbody} setPostBody={setPostBody}/> }/>
       <Route path=":id" element={<Postpage posts={posts} handledeltlete={handledeltlete}/>}/>
    </Route>
    <Route path="/Edit/:id" element={<Edit posts={posts} handleEdit={handleEdit}editBody={editBody} setEditBody={setEditBody}editTitle={editTitle} setEditTitle={setEditTitle}/>}/>
       <Route path="/About" element={<About/>}/>
       <Route path="*" element={<Missing/>}/>
       </Routes>
    
    </main>
    </div>

)
}
export default Copy;