import React from 'react';
import s from './Lvl.module.css'
const Lvl = (props) => {
return (
<div  className={s.item}>
<div className={s.text}>
Lvl {props.lvl}
</div>
 <div className={s.des}>
-{props.des1}   
    </div>
    <div className={s.des}>
-{props.des2}   
    </div>
    <div className={s.des}>
-{props.des3}   
    </div>
  </div>  
)
}
export default Lvl


