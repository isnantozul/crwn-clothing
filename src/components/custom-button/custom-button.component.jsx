import React from 'react';
import './custom-button.styles.scss';

const CutsomButton = ({ 
    children, 
    isGoogleSignIn, 
    inverted, 
    ...otherProps 
}) => (
    <button 
    className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`} 
    {...otherProps}
    >
        {children}
    </button>
);

export default CutsomButton;