import React from 'react';
import './CustomCheckbox.css';
import check from './key.svg';
import denied from './xmark.svg';

export default function CustomCheckbox({ label, checked, disabled, onChange }) {
  return (
    <div className='custom-checkbox'>
      <span className="label-text">{label}</span>
      <div className={`toggle-container ${disabled ? 'disabled' : ''}`}>
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <span className="slider">
            {checked ? (
          <img src={check} alt="Checked" width='1px'/>
        ) : (
          <img src={denied} alt="Checked" width='1px'/>
        )}
        </span>
      </div>
    </div>
  );
}
