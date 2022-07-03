import React from 'react';
import s from './Menu_element.module.css'

const Menu_element3 = (props) => {
  
if (props.type == 3){
    return (
        <div>
        <div className={s.item}> <img src = {props.img}/> </div>
        <div className={s.text}>
        {props.name}
      <div>{props.ml} мл</div> 
      </div>
      <div className={s.text2}>{props.count} руб</div>
      
    <button className={s.border}>Добавить в заказ </button>
        </div>
    )
    }
}



    export default Menu_element3