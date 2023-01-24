import React, {useState, useEffect} from 'react'
// import './Button.css';
import style from './Button.module.css'

const Button=(props)=>{

    // valeur etatique pour function
    const [isClicked, setIsClicked] = useState(false)

    // hook d'effet de cycle de vie d'une valeur
    useEffect(() => {
        if(isClicked){
            setTimeout(()=>{ 
                setIsClicked(false);
            }, 750);
        }
    }, [isClicked]);

    console.log(props);
    return (
        <button 
            className={
                `${style.Button}${isClicked?' '+style.clicked:''}`
                // style.Button
                }
            onClick={(arg)=>{ 
                setIsClicked(true);
                console.log(arg);
                props.onButtonClick();
            }}>
           {props.children}
        </button>
    );
}

export default Button;


// function Button(){
//     return <Button className='Button'>benjamin</Button>
// }
