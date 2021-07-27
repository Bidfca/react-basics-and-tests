import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const TextInput = ({ searchValue, handleChange }) => (
  <input
    className="text-input"
    onChange={handleChange}
    value={searchValue}
    type="search"
    placeholder="Type your search"
  />
);

TextInput.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextInput;
