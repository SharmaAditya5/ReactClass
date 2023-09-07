import React, { useState } from 'react'

const Message = () => {
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        if(count===0)
        {
            alert("Can't be less then zero");
        }
        else{
            setCount(count-1);
        }
        
    }
    const checkClass=()=>{

        let check=count===0?"btn btn-danger mt-4 ms-2 ":"btn btn-warning mt-4 ms-2 ";
        return check;
    }
  return (
    <div>
        <button className="btn btn-success mt-4 " onClick={increment}>+</button>
        <span><button className={checkClass()} >{count===0?"Zero":count}</button></span>
        <button className="btn btn-success mt-4 ms-2" onClick={decrement}>-</button>
    </div>
  )
}

export default Message