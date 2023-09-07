import React, { useState } from 'react'

const Counter = (props) => {

    const{counts,id}=props.counter;
    const[count,setCount]=useState(counts);
    
    const increment=()=>{
        let lcount=count;
        setCount(++lcount);
    }

    const decrement=()=>{
        if(count>0)
        {
            let lcount=count;
            setCount(--lcount);
        }
    };
    const checkClass=()=>{

        let check=count===0?"btn btn-danger mt-4 ms-2 ":"btn btn-warning mt-4 ms-2 ";
        return check;
    }




  return (
    <div>
    <button className="btn btn-success mt-4 " onClick={increment}>+</button>
    <span><button className={checkClass()} >{count===0?"Zero":count}</button></span>
    <button className="btn btn-success mt-4 ms-2" onClick={decrement}>-</button>
    <button className="btn btn-danger mx-2" onClick={()=>props.onDelete(id)}>Delete</button>
    </div>
    
  )
}

export default Counter