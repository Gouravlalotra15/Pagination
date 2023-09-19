/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'

const Details = ({item}) => {
  return (
    // const {images,title,brand,description,price}=item
        <div className="products">
        <img src={item.thumbnail} alt={item.title} className='img'/>
        <span>{item.title}</span>
        </div>
    
  )
}

export default Details