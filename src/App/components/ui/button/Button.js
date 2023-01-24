import React, {useState, useEffect} from 'react'
// import './Button.css';
import style from './Button.module.css'
import PropTypes from 'prop-types'

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
            // style={props.style}
            style={{...props.style,backgroundColor:props.bgColor}}
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

Button.propTypes={
    onButtonClick:PropTypes.func.isRequired,
    children:PropTypes.any.isRequired,
    style:PropTypes.object,
    bgColor:PropTypes.string,
};

Button.defaultProps={
    onButtonClick:()=>{alert('pas d\'action' );} // alerte => ne pas faire car ca arrete JS 
}



export default Button;


// function Button(){
//     return <Button className='Button'>benjamin</Button>
// }
