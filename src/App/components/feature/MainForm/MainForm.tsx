import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from './MainForm.module.css'
export interface IMainFormProps {
    style?: {}
}
export interface IMainFormState { }
export const initialState: IMainFormState = {}
const MainForm: React.FC<IMainFormProps> = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        //cmpdidmount
    }, []);
    return (
        <div className={style.MainForm}
            data-testid="MainForm"
            style={props.style}>
            TemplateName
        </div>
    );
};
MainForm.propTypes = {
    style: PropTypes.object,
}
MainForm.defaultProps = {}
export default MainForm;
