import React, {useState, useEffect} from 'react'
// import './Button.css';
import style from './Button.module.css'
import PropTypes from 'prop-types'
interface IButtonprops{
    onButtonClick?:Function
    bgColor?:string
    style?:{} // objet 
    children:string|React.ReactElement|Array<React.ReactElement|string>
    type?:"submit"|"button"|"reset"
}

const Button:React.FC<IButtonprops> = (props)=>{    // ajout de l'interface

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
            type={props.type}
            className={
                `${style.Button}${isClicked?' '+style.clicked:''}`
                // style.Button
                }
            onClick={(arg:React.MouseEvent)=>{ 
                setIsClicked(true);
                console.log(arg);
                if(undefined!== props.onButtonClick)
                props.onButtonClick();
            }}>
           {props.children}
        </button>
    );
}

Button.propTypes={
    onButtonClick:PropTypes.func,
    children:PropTypes.any.isRequired,
    style:PropTypes.object,
    bgColor:PropTypes.string,
    type:PropTypes.oneOf(['submit','button','reset'])
};

Button.defaultProps={
    onButtonClick:()=>{console.log()}, // alerte => ne pas faire car ca arrete JS 
    type: 'button'
}



export default Button;


// function Button(){
//     return <Button className='Button'>benjamin</Button>
// }
