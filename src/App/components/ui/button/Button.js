import React from 'react'


const Button=(props)=>{
    console.log(props);
    return <button className='Button'>
        {props.children}
    </button>
}

export default Button;


// function Button(){
//     return <Button className='Button'>benjamin</Button>
// }