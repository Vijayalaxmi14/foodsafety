import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [auditLogs, setAuditLogs] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [hygieneLogs, setHygieneLogs] = useState([]);
  const [training, setTraining] = useState([]);

  const fetchAll = async () => {
    setUsers((await axios.get('http://localhost:5000/api/users')).data);
    setAuditLogs((await axios.get('http://localhost:5000/api/audit-logs')).data);
    setInventory((await axios.get('http://localhost:5000/api/inventory')).data);
    setHygieneLogs((await axios.get('http://localhost:5000/api/hygiene-logs')).data);
    setTraining((await axios.get('http://localhost:5000/api/training-status')).data);
  };

  useEffect(() => { fetchAll(); }, []);

  const addUser = async () => {
    await axios.post('http://localhost:5000/api/users', { email, role, password });
    fetchAll();
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    fetchAll();
  };

  const updateUser = async (id) => {
    await axios.put(`http://localhost:5000/api/users/${id}`, { email, role });
    fetchAll();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Dashboard</h1>

      <h2>Manage Users</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Role" onChange={e => setRole(e.target.value)} />
      <input placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map(u => (
          <li key={u._id}>
            {u.email} ({u.role})
            <button onClick={() => deleteUser(u._id)}>Delete</button>
            <button onClick={() => updateUser(u._id)}>Update</button>
          </li>
        ))}
      </ul>

      <h2>Audit Logs</h2>
      <ul>{auditLogs.map(l => <li key={l._id}>{l.activity} @ {new Date(l.timestamp).toLocaleString()}</li>)}</ul>

      <h2>Inventory</h2>
      <ul>{inventory.map(i => <li key={i._id}>{i.name} - {i.quantity} (Exp: {i.expirationDate})</li>)}</ul>

      <h2>Hygiene Logs</h2>
      <ul>{hygieneLogs.map(h => <li key={h._id}>{h.staff}: {h.description} on {new Date(h.date).toLocaleDateString()}</li>)}</ul>

      <h2>Training Status</h2>
      <ul>{training.map(t => <li key={t._id}>{t.staff}: {t.status}</li>)}</ul>
    </div>
  );
}

export default AdminDashboard;
