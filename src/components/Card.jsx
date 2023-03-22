import React from 'react'
import "./Header.css"
import Handles from './Handles'
import Img from './Img'
import Profile from './Profile'
import trevor from '../vector1.jpg'
import ariana from '../vectorgirl1.jpg'
import uni from '../univelcity.jpg'
import me from '../Henry.jpg'
import vector from '../vector.jpg'


 function Card() {
  return (
    <div className='container'>
  <section className='drop'>
    <Img images={trevor} />
    <Profile name={'Trevor Noah'} address={'115, broadway street, Newyork'} gender={'Male'}  />
    <Handles />
  </section>
  <section className='drop'>
    <Img images={ariana}/>
    <Profile name={'Ariana Grande'} address={'Washington DC NewYork'} gender={'Female'} />
    <Handles />
  </section>
  <section className='drop'>
    <Img images={uni}/>
    <Profile name={'univelcity'} address={'42, Montgomery road Yaba'} gender={'Female'} />
    <Handles />
  </section>
  <section className='drop'>
    <Img images={me} />
    <Profile name={'Henry Mishael'} address={'36, Abosede Kuboye crescent Eric Moore Surulere'} gender={'Male'} />
    <Handles />
  </section>
  <section className='drop'>
    <Img images={vector} />
    <Profile name={'Henry Elisha'} address={'13, Babatunde Oduse street, Ejigbo Lagos'} gender={'Male'}/>
    <Handles />
  </section>
 
    
  </div>
  )
}
export default Card