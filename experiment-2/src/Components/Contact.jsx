import React from 'react';
import BasicTextFields from './TextField';
import BasicSelect from './Select';
import BasicCheckbox from './Checkbox';
import ButtonBasic from './Button';

const Contact = () => {
  return (
    <div className="page-container">
      <h1 style={{ fontSize: '4rem', color: '#2c3e50' }}>Contact Us</h1>
      <BasicTextFields />
      <BasicSelect />
      <BasicCheckbox />
      {/* Wrap buttons in a row container */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
        <ButtonBasic />
      </div>
    </div>
  );
};

export default Contact;