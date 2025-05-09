// src/components/HygieneLogComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HygieneLogComponent() {
  const [hygieneLogs, setHygieneLogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/hygiene')
      .then(res => setHygieneLogs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Hygiene Logs</h2>
      <ul>
        {hygieneLogs.map((log, index) => (
          <li key={index}>
            {log.description} on {new Date(log.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HygieneLogComponent;
