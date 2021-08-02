import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Button({ onClick, text, disabled = false }) {
  return (
    <button
      type="button"
      className="button"
      text="Load more posts"
      disabled={disabled}
      onClick={onClick}
    >
      {text}

    </button>
  );
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
