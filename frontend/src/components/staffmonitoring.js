import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StaffMonitoring = () => {
  const [hygieneLogs, setHygieneLogs] = useState([]);
  const [trainingStatus, setTrainingStatus] = useState([]);

  useEffect(() => {
    axios.get('/api/hygiene-logs').then(res => setHygieneLogs(res.data));
    axios.get('/api/training-status').then(res => setTrainingStatus(res.data));
  }, []);

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold">Staff Monitoring</h2>
      <h3 className="text-lg mt-2">Hygiene Logs</h3>
      <ul>
        {hygieneLogs.map((log, i) => (
          <li key={i}>{log.staffName} - {log.status} on {log.date}</li>
        ))}
      </ul>

      <h3 className="text-lg mt-2">Training Status</h3>
      <ul>
        {trainingStatus.map((t, i) => (
          <li key={i}>{t.staffName} - {t.completed ? 'Completed' : 'Pending'}</li>
        ))}
      </ul>
    </div>
  );
};

export default StaffMonitoring;
