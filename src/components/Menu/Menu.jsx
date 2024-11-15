import React from 'react';
import { observer } from 'mobx-react-lite';
import s from './Menu.module.css';
import MenuElement from './Menu_elements/Menu_element';
import coctailStore from '../../store/CoctailStore';

const Menu = observer(() => {
  const coctails = coctailStore.coctails;

  const renderMenuItems = (categoryId) => {
    return coctails
      .filter(coctail => coctail.categoryId === categoryId)
      .map(coctail => (
        <MenuElement
          key={coctail.id}
          img={coctail.image}
          id={coctail.id}
          ml={coctail.volume}
          name={coctail.productName}
          count={coctail.price}
        />
      ));
  };

  return (
    <div>
      <div className={s.text}>Coctails</div>
      <div className={s.menu}>{renderMenuItems(1)}</div>
      <hr />
      <div className={s.text}>Tincture</div>
      <div className={s.menu}>{renderMenuItems(2)}</div>
      <hr />
      <div className={s.text}>Vine</div>
      <div className={s.menu}>{renderMenuItems(3)}</div>
      <hr />
      <div className={s.text}>Vodka</div>
      <div className={s.menu}>{renderMenuItems(4)}</div>
      <hr />
      <div className={s.text}>Whiskey</div>
      <div className={s.menu}>{renderMenuItems(5)}</div>
      <hr />
      <div className={s.text}>Cognac</div>
      <div className={s.menu}>{renderMenuItems(6)}</div>
      <hr />
      <div className={s.text}>Beer</div>
      <div className={s.menu}>{renderMenuItems(7)}</div>
    </div>
  );
});

export default Menu;