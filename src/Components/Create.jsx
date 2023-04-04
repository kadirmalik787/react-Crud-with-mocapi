import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Create = () => {
  const [name,setName]= useState("");
  const [email,setEmail]=useState("")
   
  const history = useNavigate()

  const header = {"Access-Control-Allow-origin":"*"}

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(name ==""&&email==""){
      alert("fill Name and Email")

    }else{
      axios.post(
        'https://642a6a07b11efeb75998ec15.mockapi.io/crud-api',
        {name: name,
         email:email,
         header,
       }
    )
      .then(()=>{
       history('/read')
 
      })      
      
    }
   
  }
  return (
    <>
    <div className='d-flex justify-content-between m-2'>
    <h2>Create</h2>
    <Link to={"/read"}>
    <button className='btn btn-primary'>Show Data</button>
</Link>
    </div>
   
    <form>
    <div className="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input onChange={(e)=>setName(e.target.value)}  type="text" className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
 
  
  <button  onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
</form>

    </>
  )
}

export default Create