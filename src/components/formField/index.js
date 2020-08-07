import React from 'react';
import PropTypes from 'prop-types';

function FormField({
  label, type, name, value, onchange,
}) {
  const formField = 'id_$(name)';

  return (
    <div>
      <label
        htmlFor={formField}
      >
        {label}
        :
        <input
          id={formField}
          type={type}
          value={value}
          name={name}
          onChange={onchange}
        />
      </label>
    </div>
  );
}
FormField.defaultProps = {
    type: 'text',
    value: '',
}

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    onchange: PropTypes.string.isRequired,

};

export default FormField;
