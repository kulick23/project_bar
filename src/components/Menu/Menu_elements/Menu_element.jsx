import React from 'react';
import s from './Menu_element.module.css';
import orderStore from '../../../store/OrderStore';

const MenuElement = (props) => {
  const addToOrder = () => {
    orderStore.addOrder({
      id: props.id,
      name: props.name,
      price: props.count,
      volume: props.ml,
      image: props.img
    });
  };

  return (
    <div className={s.itemContainer}>
      <div className={s.item}>
        <img src={props.img} alt={props.name} />
      </div>
      <div className={s.text}>
        {props.name}
        <div>{props.ml} ml</div>
      </div>
      <div className={s.text2}>{props.count} $</div>
      <button onClick={addToOrder} className={s.border}>Add</button>
    </div>
  );
};

export default MenuElement;