import React from 'react'
import './styles/Botonera.modules.css'

import * as colorAppActions from '../actions/coloractions';

function Botonera(){
 const buttonClick=(color)=>{
     colorAppActions.changeColor(color);
 }

  return (
    <div>
        <button onClick={e=> buttonClick('#ff0000')}>Rojo</button>
        <button onClick={e=> buttonClick('#00ff00')}>Verde</button>
    </div>
  )
}

export default Botonera