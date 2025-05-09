import React, { useState, useEffect } from 'react';
import { getInspectionLogs } from '../../services/api';

const FoodSafetyOfficerDashboard = () => {
  const [inspectionLogs, setInspectionLogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const logsData = await getInspectionLogs();
      setInspectionLogs(logsData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Food Safety Officer Dashboard</h2>
      <div>
        <h3>Inspection Logs</h3>
        <ul>
          {inspectionLogs.map((log) => (
            <li key={log._id}>{log.inspectionDate} - {log.status}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FoodSafetyOfficerDashboard;
