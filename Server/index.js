// import required modules

const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Initialize Express app

const app = express();
const PORT = process.env.PORT || 3000;

// Set up PostgreSQL connection
const pool = new Pool({
    user: 'matt',
    host: 'localhost',
    database: 'AmazonDb',
    port: 5432,
});

// Middleware for JSON parsing
app.use(express.json());

// Middleware for JWT verification
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ error: 'Token is required'});
    }

    jwt.verify(token, 'your_secret_key', (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token'});
        }

        req.userId = decoded.userId;
        next();
    });
}

// Endpoint for user registration
app.post('/register', async (req, res) => {
    try {
        const { username, password, email, shipping_address, billing_address, phone_number} = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Store user in database
        const result = await pool.query(
            'INSERT INTO users (username, password, email, shipping_address, billing_address, phone_number) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
            [username, hashedPassword, email, shipping_address, billing_address, phone_number]
        );

        const userId = result.rows[0].id;

        res.status(201).json({ message: 'User registered successfully', userId})
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'Internal Server Error'});
    }
});

// Endpoint for user login
app.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Retrieve user from database
      const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
  
      if (result.rows.length === 0) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
      const user = result.rows[0];
  
      // Check password
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
  
      res.json({ token });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Protected routes
  app.get('/profile', verifyToken, async (req, res) => {
    try {
      const userId = req.userId;
  
      // Fetch user profile from database
      const result = await pool.query('SELECT username FROM users WHERE id = $1', [userId]);
      const user = result.rows[0];
  
      res.json({ username: user.username });
    } catch (error) {
      console.error('Error fetching profile:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });