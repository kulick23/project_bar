import React from 'react';
import s from './Menu.module.css'
import Menu_element  from './Menu_elements/Menu_element';
import  Menu_element2  from './Menu_elements/Menu_element2';
import  Menu_element3  from './Menu_elements/Menu_element3';
import  Menu_element4  from './Menu_elements/Menu_element4';
import  Menu_element5  from './Menu_elements/Menu_element5';
import  Menu_element6  from './Menu_elements/Menu_element6';
import  Menu_element7  from './Menu_elements/Menu_element7';

const Menu = (props) =>{
   
    let MenuItem = props.state.menu.map (p => <Menu_element img = {p.img} id={p.id} ml = {p.ml} name={p.name} type={p.type} count={p.count}/>) 
    let MenuItem2 = props.state.menu.map (p => <Menu_element2 img = {p.img} id={p.id} ml = {p.ml} name={p.name} type={p.type} count={p.count}/>) 
    let MenuItem3 = props.state.menu.map (p => <Menu_element3 img = {p.img} id={p.id} ml = {p.ml} name={p.name} type={p.type} count={p.count}/>) 
    let MenuItem4 = props.state.menu.map (p => <Menu_element4 img = {p.img} id={p.id} ml = {p.ml} name={p.name} type={p.type} count={p.count}/>) 
    let MenuItem5 = props.state.menu.map (p => <Menu_element5 img = {p.img} id={p.id} ml = {p.ml} name={p.name} type={p.type} count={p.count}/>) 
    let MenuItem6 = props.state.menu.map (p => <Menu_element6 img = {p.img} id={p.id} ml = {p.ml} name={p.name} type={p.type} count={p.count}/>) 
    let MenuItem7 = props.state.menu.map (p => <Menu_element7 img = {p.img} id={p.id} ml = {p.ml} name={p.name} type={p.type} count={p.count}/>) 

  

    return(
        <div>
          
             <div className={s.text}>Coctails</div>
        <div className = {s.menu}>{MenuItem}</div>
      <hr></hr>
      <div className={s.text}>Tincture</div>
      <div className = {s.menu}>{MenuItem2}</div>
      <hr></hr>
      <div className={s.text}>Vine</div>
      <div className = {s.menu}>{MenuItem3}</div>
      <hr></hr>
      <div className={s.text}>Vodka</div>
      <div className = {s.menu}>{MenuItem4}</div>
      <hr></hr>
      <div className={s.text}>Whiskey</div>
      <div className = {s.menu}>{MenuItem5}</div>
      <hr></hr>
      <div className={s.text}>Cognac</div>
      <div className = {s.menu}>{MenuItem6}</div>
      <hr></hr>
      <div className={s.text}>Beer</div>
      <div className = {s.menu}>{MenuItem7}</div>
        </div>
    )
}

export default Menu;
