
import React, { useEffect, useState } from 'react'
import axios from "axios";
const AboutUs = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:9000/contact/").then(response=>{
            setData(response.data)
        }).catch(error=>{
        alert(error);
        });
    },[])
  return (
    <div className="d-flex flex-column align-item-center justify-content-center  m-3">
        <h2>Reading Git Information</h2>
        <table className="table table-dark">
            <thead className="table table-warning">
                <tr>
                    <th >ID</th><th>Name</th><th>Photo</th>
                </tr>
            </thead>
            <tbody className='table table-success'>
                {data.map((row)=>(
                <tr>
                    <td className='text-center' style={{verticalAlign:"middle"}}>{row.id}</td>
                    <td className='text-center' style={{verticalAlign:"middle"}}><img src={row.avatar_url} width="200px" height="200px" alt="Pic not found"/> </td>
                </tr>
                ))}
            </tbody>
        </table>
      
    </div>
  )
}

export default AboutUs