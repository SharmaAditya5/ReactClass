import React from 'react'

const Product = (props) => {
  return (
    
        <div className='card text-white bg-success d-flex flex-column justify-content-center align-items-center m-2'>
            <h2>Message Information</h2>
            <div className='card card-light d-flex flex-column justify-content-center align-items-center m-2'>
                <h5 className='m-2'>ID:{props.id}</h5>
                <h5 className='m-2'>Title:{props.title}</h5>
                <h5 className='m-2'>Body:{props.body}</h5>
            </div>

        
       

    </div>
  )
}

export default Product