import React from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";

let Button = ({className,onclick,overline,children}) => {
    return (
        <button onClick={onclick}
        className={classNames('button', className, {'button--overline' : overline})}>
            {children}
        </button>
    )
};

Button.propTypes = {
    classNames: PropTypes.string,
    onclick: PropTypes.func,
    overline: PropTypes.bool,
};

Button.defaultProps = {
    classNames: '',
    overline: false,
};

export  default Button;