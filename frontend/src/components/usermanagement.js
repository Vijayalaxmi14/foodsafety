import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ email: '', password: '', role: 'Admin' });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    axios.get('/api/users').then(res => setUsers(res.data));
  }, []);

  const addUser = async () => {
    const res = await axios.post('/api/users', newUser);
    setUsers([...users, res.data]);
    setNewUser({ email: '', password: '', role: 'Admin' });
  };

  const deleteUser = async (id) => {
    await axios.delete(`/api/users/${id}`);
    setUsers(users.filter(u => u._id !== id));
  };

  const updateUser = async () => {
    const res = await axios.put(`/api/users/${editingUser._id}`, editingUser);
    setUsers(users.map(u => u._id === editingUser._id ? res.data.updatedUser : u));
    setEditingUser(null);
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold">User Management</h2>
      <div className="flex gap-2 my-2">
        <input placeholder="Email" value={newUser.email} onChange={e => setNewUser({ ...newUser, email: e.target.value })} />
        <input placeholder="Password" value={newUser.password} onChange={e => setNewUser({ ...newUser, password: e.target.value })} />
        <select value={newUser.role} onChange={e => setNewUser({ ...newUser, role: e.target.value })}>
          <option>Admin</option>
          <option>Chef</option>
          <option>Food Safety Officer</option>
        </select>
        <button onClick={addUser}>Add</button>
      </div>
      <ul>
        {users.map(u => (
          <li key={u._id}>
            {editingUser?.email === u.email ? (
              <>
                <input value={editingUser.email} onChange={e => setEditingUser({ ...editingUser, email: e.target.value })} />
                <select value={editingUser.role} onChange={e => setEditingUser({ ...editingUser, role: e.target.value })}>
                  <option>Admin</option>
                  <option>Chef</option>
                  <option>Food Safety Officer</option>
                </select>
                <button onClick={updateUser}>Save</button>
              </>
            ) : (
              <>
                {u.email} - {u.role}
                <button onClick={() => setEditingUser(u)}>Edit</button>
                <button onClick={() => deleteUser(u._id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
