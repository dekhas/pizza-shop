import React from 'react';
import classNames from 'classnames';

let Button = ({className,onclick,overline,children}) => {
    return (
        <button onClick={() => alert(onclick)}
        className={classNames('button', className, {'button--overline' : overline})}>
            {children}
        </button>
    )
};

export  default Button;