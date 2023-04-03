import React from 'react'
import  { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
    const [data, setData] = useState([]);
    console.log(data)

    function getData() {
      axios
        .get("https://642a6a07b11efeb75998ec15.mockapi.io/crud-api")
        .then((res) => {
          console.log(res)
          setData(res.data);
        });
    }
  
    function handleDelete(id) {
      axios
        .delete(`https://642a6a07b11efeb75998ec15.mockapi.io/crud-api/${id}`)
        .then(() => {
          getData();
        });
    }
  
    const setToLocalStorage = (id, name, email) => {
      localStorage.setItem("id", id);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    };
  
    useEffect(() => {
      getData();
    }, []);



  return (
    <>



     
<div className='d-flex justify-content-between m-2'>
<h2>Read Operation</h2>
<Link to={"/"}>
<button className='btn btn-secondary'>Create</button>
</Link>
</div>
<table className={`table `}>
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Name</th>
    <th scope="col">Email</th>
    <th scope="col"></th>
    <th scope="col"></th>
  </tr>
</thead>

  
 
      <>
      { data.map((eachData)=>( <tbody>
          <tr>
            <th scope="row">{eachData.id}</th>
            <td>{eachData.name}</td>
            <td>{eachData.email}</td>
            <td>
              <Link to="/update">
                <button
                  className="btn-success"
                  onClick={() =>
                    setToLocalStorage(
                      eachData.id,
                      eachData.name,
                      eachData.email
                    )
                  }
                >
                  Edit
                </button>
              </Link>
            </td>
            <td>
              <button
                className="btn-danger"
                onClick={() => handleDelete(eachData.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody> ))}
      </>
  
</table>
</>
  )
}

export default Read