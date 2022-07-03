import React from 'react';
import './App.css';

import Header from './components//Header/Header';
import Profile from './components/Profile/Profile';
import Order from './components/Order/Order';
import Menu from './components/Menu/Menu';
import Slider from './components/Party/Slider'
import SingInForm from '../src/components/Login/Sing/SingIn'
import SignUpForm from '../src/components/Login/Sing/SingUp'
import { Routes, Route } from 'react-router-dom';

const App = (props) =>{
  
  return (
   
    <div className = 'app-wrapper'>

<Header/>
 <div className = 'app-wrapper-content'>
 <Routes>
 <Route path ="/profile" element = {<SignUpForm />} />
 <Route path = "/sign-in" element = {<SingInForm/>}/>
 <Route path ="/registrprofile" element = {<Profile state = {props.state.ProfilePage}/>} />
 <Route  path ="/orders" element = {<Order state = {props.state.OrderPage}/>}/>
 <Route  path ="/menu" element = {<Menu state = {props.state.MenuPage}/>}/>
 <Route  path ="/party" element = {<Slider state = {props.state.PartyPage}/>}/>
 </Routes>
 </div>
    </div>
    
  );
}


export default App;
