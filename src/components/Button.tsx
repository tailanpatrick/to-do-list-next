import React from 'react';

import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
    onClick: ()=>  void
}

const Button = ({children, onClick, ...rest} : ButtonProps) => {
    return (  
        <button onClick={onClick} className='button' {...rest}>
            {children}
        </button>
    );
}
 
export default Button;
