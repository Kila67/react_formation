import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from './FlexLayout.module.css'
export interface IFlexLayoutProps {
    style?: {},
    children: Array<React.ReactElement> 
}
export interface IFlexLayoutState { }
export const initialState: IFlexLayoutState = {}
const FlexLayout: React.FC<IFlexLayoutProps> = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        //cmpdidmount
    }, []);
    return (
        <div className={style.FlexLayout}
            data-testid="FlexLayout"
            style={props.style}>
            {props.children}
        </div>
    );
};
FlexLayout.propTypes = {
    style: PropTypes.object,
}
FlexLayout.defaultProps = {}
export default FlexLayout;
