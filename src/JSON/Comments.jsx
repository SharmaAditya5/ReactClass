import React, { useEffect, useState } from 'react'
import Product from './Product';
import axios from 'axios';
import {Modal,Button} from "react-bootstrap";


const Comments = () => {
    const [message,setMessage]=useState({});
    const [id,setId]=useState(1);
    const[show,setShow]=useState(false);
    const[hide,setHide]=useState(false);
    const ShowModal=()=>{
        setShow(true);
    }
    const handleClose = () => setShow(false);
    const getNext=()=>{
        if(id>=1)
        {
            setId((id)=>id+1);
        }
        else{   
            setId(1);
            alert("Already on First Message");
        }
        fetchMessage(id)
    }
    const getPrevios=()=>{
        if(id>=1)
        {
            setId((id)=>id-1);
        }
        else{
            setId(1);
        
            alert("Already on First Message");
        }
        fetchMessage(id)
    }
    const fetchMessage=(id)=>{
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{setMessage(response.data);})
        .catch((error)=>{alert(error)});    
    };
    useEffect(()=>{
        fetchMessage(id)
    },[])
  return (
    <div>
               <Product id={message.id} title={message.title} body={message.body}/>

       <button className='btn btn-outline-dark col-1 mx-2' onClick={getPrevios}>Previous</button>
       <button className='btn btn-outline-dark col-1 mx-2' onClick={getNext}>Next</button>
       <button className='btn btn-outline-dark col-1 mx-2' onClick={ShowModal}>ShowModal</button>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton> </Modal.Header>
        <Modal.Body>
        <Product id={message.id} title={message.title} body={message.body}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Comments