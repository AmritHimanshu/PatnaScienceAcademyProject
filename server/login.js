
import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const app = express();
const PORT = 2004;
import cors from 'cors';
app.use(cors({
  origin: 'http://localhost:3000',
}));
mongoose.connect('mongodb+srv://khushisingh5716:khushi5716@registration.dcyghsl.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.use(express.json());

// User registration
app.post('/api/register', async (req, res) => {
  const { name, email, mobile, password } = req.body;

  // Check if the user already exists
  try{
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ error: 'User already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save the user to the database
  const user = new User({ name, email, mobile, password: hashedPassword });
  await user.save();

  // Create and send the JWT
  const token = jwt.sign({ userId: user._id, email }, 'your-secret-key');
  res.json({ token });
}catch (error) {
    // Handle registration error
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// User login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Check if the password is correct
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  // Create and send the JWT
  const token = jwt.sign({ userId: user._id, email }, 'your-secret-key');
  res.json({ token });
});

// Protected route example
app.get('/api/protected', (req, res) => {
  // Access the authenticated user data from the request
  const { userId, email } = req.user;
  // You can use this data to fetch user-specific information from the database
  res.json({ userId, email });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
