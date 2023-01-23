import React from 'react'


const Button=(props)=>{
    console.log(props);
    return <button className='Button'>
        {props.text.substr(2,4)}
    </button>
}

export default Button;


// function Button(){
//     return <Button className='Button'>benjamin</Button>
// }