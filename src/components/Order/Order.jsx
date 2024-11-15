import React, { useEffect, useState } from 'react';
import s from './Order.module.css';
import CoctailItem from './OrdersItems/CoctailItem.jsx';
import Dropdown from './Dropdown';
import orderStore from '../../store/OrderStore';
import { observer } from 'mobx-react-lite';
import { auth } from '../../firebase';
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Order = observer(() => {
  const [user, setUser] = useState(null);
  const [selectedTable, setSelectedTable] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/auth');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const handleOrder = () => {
    if (selectedTable && orderStore.orders.length > 0) {
      alert('Заказ принят');
      orderStore.clearOrders();
    }
  };

  const coctailElements = orderStore.orders.map((d, index) => (
    <CoctailItem key={index} name={d.name} id={d.id} price={d.price} img={d.image} quantity={d.quantity} />
  ));

  return (
    <div>
      <div className={s.text}>Your order:</div>
      {orderStore.orders.length > 0 ? (
        <div className={s.dialogsItems}>
          {coctailElements}
          <Dropdown setSelectedTable={setSelectedTable} />
          <button onClick={handleOrder} className={s.orderButton} disabled={!selectedTable}>Order</button>
          <button onClick={() => orderStore.clearOrders()} className={s.orderButton}>Delete order</button>
        </div>
      ) : (
        <div className={s.emptyText}>Empty</div>
      )}
    </div>
  );
});

export default Order;