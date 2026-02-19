import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, to, href, onClick, variant = 'primary', className = '' }) => {
    const btnClass = `btn btn-${variant} ${className}`;

    if (to) {
        return <Link to={to} className={btnClass}>{children}</Link>;
    }

    if (href) {
        return <a href={href} className={btnClass} target="_blank" rel="noopener noreferrer">{children}</a>;
    }

    return (
        <button onClick={onClick} className={btnClass}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'text']),
    className: PropTypes.string,
};

export default Button;
