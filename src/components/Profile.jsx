import React from 'react'
import './Header.css'

 function Profile({name, address, gender}) {
    
  return (
    <div className="main">
        <h3>Name : {name}</h3>
        <h3>Address : {address}</h3>
        <h3>Gender : {gender}</h3>
       
    </div>
  )
}
export default Profile


