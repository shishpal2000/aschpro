import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from '../styles/button.module.css';

const Button = ({ children, onClick, type = 'button', variant = 'primary', size = 'md', className, ...props }) => {
  const buttonClass = classNames(
    styles.button,
    styles[variant],
    styles[size],
    className
  );

  return (
    <button type={type} className={buttonClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

export default Button;
