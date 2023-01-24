import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from './SvgViewver.module.css'
export interface ISvgViewverProps {
    style?: {}
}
export interface ISvgViewverState { }
export const initialState: ISvgViewverState = {}
const SvgViewver: React.FC<ISvgViewverProps> = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        //cmpdidmount
    }, []);
    return (
        <div className={style.SvgViewver}
            data-testid="SvgViewver"
            style={props.style}>
            TemplateName
        </div>
    );
};
SvgViewver.propTypes = {
    style: PropTypes.object,
}
SvgViewver.defaultProps = {}
export default SvgViewver;
