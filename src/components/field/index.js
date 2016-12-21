import React from 'react';

var Field = ({ label, value, onChange, name, error, type }) => <div className="field">
  <label className="field-label">{ label }</label>
  <input className="field-input" type={ type } value={ value } name={ name } onChange={ onChange } />
  { error ? <div>{ error.message }</div> : null }
</div>

export default Field;
