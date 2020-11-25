import React from 'react';
import './custom-button.styles.scss';

const CutsomButton = ({ children, ...otherProps }) => (
    <button className='custom-button' {...otherProps} >
        {children}
    </button>
);

export default CutsomButton;