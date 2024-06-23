// index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Survey Backend!');
});

// Example route to fetch questions
const questions = {
  technology: [
    { id: 1, question: 'What is your favorite programming language?' },
    { id: 2, question: 'How many years of experience do you have in technology?' }
  ],
  health: [
    { id: 1, question: 'How often do you exercise?' },
    { id: 2, question: 'What is your diet preference?' }
  ],
  education: [
    { id: 1, question: 'What is your highest qualification?' },
    { id: 2, question: 'What was your field of study?' }
  ]
};

app.get('/api/questions/:topic', (req, res) => {
  const topic = req.params.topic.toLowerCase();
  if (questions[topic]) {
    res.json({ questions: questions[topic] });
  } else {
    res.status(404).json({ error: 'Topic not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
