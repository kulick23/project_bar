import React from 'react';
import MyLvl from './MyLvl/MyLvl';
import User from './User';
import s from'./Profile.module.css'



const Profile = (props) => {
  let user = props.state.profile.map (state =>  <User name = {state.name} discount = {state.discount} phon = {state.phon} role={state.role}/>)
return (
    <div >
      <div className={s.block}>
      {user}
      </div>
    <div className={s.block}>
    <MyLvl discount = {props.state.discount}/>
    </div></div>
)
}
export default Profile