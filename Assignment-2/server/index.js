const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

/* Connect to MongoDB */

mongoose.connect('mongodb://localhost:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

/* Define schema for leaderboard data */

const leaderboardSchema = new mongoose.Schema({
  teamName: String,
  totalGamesPlayed: Number,
  score: Number,
  avatar: String,
});

const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);

/* API endpoint to get leaderboard data */

app.get('/leaderboard', async (req, res) => {
  try {
    const leaderboardData = await Leaderboard.find().sort({ score: -1 });
    res.json(leaderboardData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});