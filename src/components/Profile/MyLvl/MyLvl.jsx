import React from 'react';
import s from './MyLvl.module.css'
import Lvl from './Lvl/Lvl';
const MyLvl = (props) => {
 
let Lvls = props.discount.map (discount =>  <Lvl lvl = {discount.lvl} des1 = {discount.des1} des2 =  {discount.des2} des3 = {discount.des3}/>)

return (
<div>
<div className={s.text}>Бонусная программа:  </div>
  <div className ={s.postblock}>
  {Lvls}
      </div>
      </div>
)
}
export default MyLvl

