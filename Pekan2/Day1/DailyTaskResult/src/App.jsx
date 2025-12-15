import React from 'react';
import SimpleEventHandler from './SimpleEventHandler';
import SyntheticEventDemo from './SyntheticEventDemo';
import ControlledForm from './ControlledForm';
import UncontrolledForm from './UncontrolledForm';
import RegistrationForm from './RegistrationForm';

const sectionStyle = {
  border: '1px solid #ccc',
  padding: '20px',
  margin: '20px 0',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
};

function App() {
  return (
    <div style={{ padding: '0 40px' }}>
      <hr />

      <div style={sectionStyle}>
        <SimpleEventHandler />
      </div>

      <div style={sectionStyle}>
        <SyntheticEventDemo />
      </div>

      <div style={sectionStyle}>
        <ControlledForm />
      </div>

      <div style={sectionStyle}>
        <UncontrolledForm />
      </div>

      <div style={sectionStyle}>
        <RegistrationForm />
      </div>
      
    </div>
  );
}

export default App;