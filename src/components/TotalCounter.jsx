import React, { useState } from 'react'
import Counter from './Counter';

const TotalCounter = () => {
    const [counters,setCounters]=useState(
        [
            {id:1,counts:1},
            {id:2,counts:2},
            {id:3,counts:3},
            {id:4,counts:4},
        ]
    );
    const deleteCounter=(id)=>{
        const lcounter=counters.filter((counter)=>counter.id!==id);

    }

  return (
    <div>
        {
            counters.map((counter)=>(<Counter key={counter.id} counter={counter} onDelete={deleteCounter}/>))
        }
    </div>
  )
}

export default TotalCounter