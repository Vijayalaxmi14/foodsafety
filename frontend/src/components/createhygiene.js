// src/components/CreateHygieneLog.js
import React, { useState } from 'react';
import axios from 'axios';

function CreateHygieneLog() {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const hygieneData = { description, date };
    axios.post('http://localhost:5000/api/hygiene', hygieneData)
      .then(res => alert(res.data.message))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Create Hygiene Log</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
        <button type="submit">Add Log</button>
      </form>
    </div>
  );
}

export default CreateHygieneLog;
