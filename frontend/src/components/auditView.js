import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AuditLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get('/api/audit-logs').then(res => setLogs(res.data));
  }, []);

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold">Audit Logs</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            [{log.timestamp}] {log.action} by {log.user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuditLogs;
