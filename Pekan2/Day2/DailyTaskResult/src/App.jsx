import React from 'react';
import LoginStatus from './LoginStatus.jsx'; 
import WelcomeMessage from './WelcomeMessage.jsx';
import NotificationBadge from './NotificationBadge.jsx';
import StatusDisplay from './StatusDisplay.jsx';
import DynamicTaskList from './DynamicTaskList.jsx';

const tasksForToday = [
  { id: 101, name: 'Setup Proyek React', completed: true },
  { id: 102, name: 'Kerjakan Tugas Evaluasi', completed: false },
  { id: 103, name: 'Review Materi List Rendering', completed: false },
];

const emptyTaskArray = [];

function App() {
  const userIsActive = true;
  const messages = 3;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>

      <LoginStatus isUserLoggedIn={userIsActive} />

      <hr />

      <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px' }}>
        <h3>2. Ternary Operator dan && Operator (Di Dalam JSX)</h3>
        <WelcomeMessage isUserLoggedIn={userIsActive} /> 
        <NotificationBadge unreadCount={messages} /> 
      </div>

      <hr />

      <StatusDisplay status="success" />
      
      <hr />

      <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px' }}>
        <h3>4 & 5. List Rendering (map & key) & Handling Empty State</h3>
        
        <h4>Daftar Tugas (Data Ada):</h4>
        <DynamicTaskList tasks={tasksForToday} />
        
        <h4>Daftar Tugas (Empty State):</h4>
        <DynamicTaskList tasks={emptyTaskArray} />
      </div>

    </div>
  );
}

export default App;