import React, { useState } from 'react'

const Img=()=> {
    const [file,setFile]=useState('');

    const submit=(e)=>{
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <div className='Img'>
      <h2>postImage</h2>
      <input type= "url" onChange={submit} />
      <img src={file} style={{width: "100px",height: "100px" }}/>
    </div>
  )
}

export default Img
