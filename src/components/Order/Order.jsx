import React from 'react';
import s from './Order.module.css'
import CoctailItem from './OrdersItems/CoctailItem.jsx'
import Dropdown from './Dropdown';

const Order = (props) =>{
    let Coctailslements = props.state.order.map (d => <CoctailItem name = {d.name} id={d.id} />)


    return(
<div > 
<div className={s.text}> Ваш заказ:</div>
<div className =  {s.dialogsItems}>
{Coctailslements}
<Dropdown  />

  </div>
</div>

    )
}
export default Order