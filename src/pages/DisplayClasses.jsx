import React from 'react'
import { useParams } from 'react-router-dom'
import {ClassesList} from '../components/classes/ClassesList'
import "./DisplayClasses.css"

function DisplayClasses() {

  const {id} = useParams();
  const classe = ClassesList[id]

  return (
    <div className='display-classe'>
      <h1>{classe.name}</h1>
      <div className='display-classe-container'>
        <img src={classe.image} className='classe-img' alt="classe-img" />
        <div className='stamina'>{classe.stamina}</div>
        <div className='magicka'>{classe.magicka}</div>
      </div>
      
    </div>
  )
}

export default DisplayClasses