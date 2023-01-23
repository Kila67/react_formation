import React from 'react'
// import './Button.css';
import style from './Button.module.css'

const Button=(props)=>{
    console.log(props);
    return <button className={style.Button}>
        {props.children}
    </button>
}

export default Button;


// function Button(){
//     return <Button className='Button'>benjamin</Button>
// }