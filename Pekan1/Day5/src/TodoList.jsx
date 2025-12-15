import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, newTask]);
    setNewTodo('');
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h3>Todo List (State Array)</h3>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Tambah tugas..."
        />
        <button type="submit" style={{ marginLeft: '10px' }}>Tambah</button>
      </form>

      <ul style={{ padding: '10px 0' }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none', margin: '5px 0', display: 'flex', alignItems: 'center' }}>
            <input 
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
              style={{ marginRight: '10px' }}
            />
            <span style={{ flexGrow: 1 }}>{todo.text}</span>
            <button 
              onClick={() => handleDeleteTodo(todo.id)}
              style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white', border: 'none', padding: '3px 8px' }}
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;