import React from 'react';
import { NavLink } from 'react-router-dom';
import s from  './Header.module.css'
import logo from './image/Logo.png'

const Header = () => {
return (
    <nav className = {s.nav}>
   <img className={s.logo} src = {logo}/> 
   <div className={s.margin}>
    <NavLink   to = "/profile" className={s.neon}> Profile</NavLink>
    <NavLink   to = "/orders" className={s.neon}> Orders</NavLink>
    <NavLink   to = "/menu" className={s.neon}> Menu</NavLink>
    <NavLink   to = "/party" className={s.neon}> Partys</NavLink>
    {/* <NavLink  to = "/menu" style={({ isActive }) =>({color: isActive ? 'blue' : 'white'})}>  Menu</NavLink> */}
    </div>
    </nav>

)
}
export default Header