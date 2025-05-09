const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/fsms')
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Schemas
const UserSchema = new mongoose.Schema({ email: String, password: String, role: String });
const HygieneLogSchema = new mongoose.Schema({ staff: String, description: String, date: Date });
const InventorySchema = new mongoose.Schema({ name: String, quantity: Number, expirationDate: String });
const AuditLogSchema = new mongoose.Schema({ activity: String, timestamp: Date });
const TrainingStatusSchema = new mongoose.Schema({ staff: String, status: String });

// Models
const User = mongoose.model('User', UserSchema);
const HygieneLog = mongoose.model('HygieneLog', HygieneLogSchema);
const Inventory = mongoose.model('Inventory', InventorySchema);
const AuditLog = mongoose.model('AuditLog', AuditLogSchema);
const TrainingStatus = mongoose.model('TrainingStatus', TrainingStatusSchema);

// User CRUD
app.get('/api/users', async (req, res) => res.json(await User.find({}, 'email role')));
app.post('/api/users', async (req, res) => {
  const { email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ email, password: hashedPassword, role });
  await newUser.save();
  res.status(201).send({ message: 'User added' });
});
app.put('/api/users/:id', async (req, res) => {
  const { email, role } = req.body;
  await User.findByIdAndUpdate(req.params.id, { email, role });
  res.send({ message: 'User updated' });
});
app.delete('/api/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send({ message: 'User deleted' });
});

// Others
app.get('/api/audit-logs', async (req, res) => res.json(await AuditLog.find()));
app.get('/api/inventory', async (req, res) => res.json(await Inventory.find()));
app.get('/api/hygiene-logs', async (req, res) => res.json(await HygieneLog.find()));
app.get('/api/training-status', async (req, res) => res.json(await TrainingStatus.find()));

app.listen(5000, () => console.log('Server running on port 5000'));