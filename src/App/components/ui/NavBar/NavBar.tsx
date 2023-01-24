import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from './NavBar.module.css'
export interface INavBarProps {
    style?: {}
}
export interface INavBarState { }
export const initialState: INavBarState = {}
const NavBar: React.FC<INavBarProps> = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        //cmpdidmount
    }, []);
    return (
        <div className={style.NavBar}
            data-testid="NavBar"
            style={props.style}>
            templaName
        </div>
    );
};
NavBar.propTypes = {
    style: PropTypes.object,
}
NavBar.defaultProps = {}
export default NavBar;
