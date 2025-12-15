import React from 'react';

function DynamicTaskList({ tasks }) {
  if (!tasks || tasks.length === 0) {
    return (
      <div style={{ 
        border: '1px dashed orange', 
        padding: '10px', 
        backgroundColor: '#fffbe5' 
      }}>
        <p>⚠️ Tidak ada item dalam daftar. Silakan tambahkan tugas baru.</p>
      </div>
    );
  }

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {tasks.map(task => (
        <li 
          key={task.id} 
          style={{ 
            padding: '5px 0', 
            borderBottom: '1px dotted #eee',
            color: task.completed ? 'gray' : 'black'
          }}
        >
          {task.completed ? '✓ ' : '□ '}
          {task.name}
        </li>
      ))}
    </ul>
  );
}

export default DynamicTaskList;