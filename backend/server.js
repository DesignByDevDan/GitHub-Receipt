const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());

// Route to fetch GitHub user data
app.get('/api/github/:username', async (req, res) => {
  const username = req.params.username;

  // Use GITHUB_TOKEN from environment variables for authenticated requests
  const headers = process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {};

  try {
    // Fetch user profile from GitHub API
    const userProfile = await axios.get(`https://api.github.com/users/${username}`, { headers });

    // Fetch user repositories from GitHub API
    const userRepos = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`, { headers });

    // Calculate top programming language
    const languages = {};
    userRepos.data.forEach((repo) => {
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1;
      }
    });

    const topLanguage = Object.keys(languages).reduce((a, b) => (languages[a] > languages[b] ? a : b), '');

    // Send JSON response
    res.json({
      profile: userProfile.data,
      repos: userRepos.data,
      topLanguage,
    });
  } catch (error) {
    console.error('Error fetching data from GitHub:', error.message);

    // Handle errors and send appropriate response
    if (error.response && error.response.status === 404) {
      res.status(404).json({ error: 'GitHub user not found' });
    } else {
      res.status(500).json({ error: 'Failed to fetch GitHub data' });
    }
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
