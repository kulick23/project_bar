import React from 'react';
import s from './../Order.module.css'

const CoctailItem = (props) =>{
    return (
        <div className = {s.coctail}>
          <div className={s.amount2}>  {props.name} ({props.id})</div>
          <div className={s.amount}>  {props.id} руб</div>
   <hr></hr> 
</div>
    )
}



export default CoctailItem