import React from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";

let Button = ({className,onclick,outline,children}) => {
    return (
        <button onClick={onclick}
        className={classNames('button', className, {'button--outline' : outline})}>
            {children}
        </button>
    )
};

Button.propTypes = {
    classNames: PropTypes.string,
    onclick: PropTypes.func,
    outline: PropTypes.bool,
};

Button.defaultProps = {
    classNames: '',
    outline: false,
};

export  default Button;