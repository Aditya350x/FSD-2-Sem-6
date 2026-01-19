import React from 'react';
import BasicTextFields from './TextField';
import BasicSelect from './Select';
import BasicCheckbox from './Checkbox';
import Button from './Button';

const About = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>About Us</h1>
      <BasicTextFields />
      <BasicSelect />
      <BasicCheckbox />
      <div style={{ marginTop: '10px' }}>
        <Button />
      </div>
    </div>
  );
};

export default About;