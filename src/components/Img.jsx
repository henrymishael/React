import React from 'react'

import './Header.css'


 function Img({images}) {
    let alt = 'henry'
  return (
    <div >
      <img className='minor' src={images} alt={alt} width="200" height="200"  />
    </div>
  )
}

export default Img
