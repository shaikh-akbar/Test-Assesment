const express = require('express');
const axios = require('axios');
const NodeCache = require('node-cache');
const cors = require('cors');

const app = express();
const PORT =  5000;
const cache = new NodeCache({ stdTTL: 3600 }); // Cache for 1 hour

app.use(cors()); // Enable CORS for all requests

// Route to fetch news headlines
app.get('/api/news', async (req, res) => {
  const cacheKey = 'news-headlines';

  // Check if data is in cache
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return res.json(cachedData); // Send cached data
  }

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=69df452d89bc40bf9da6c0e6dcbaec65`
    );

    // Cache the response data
    cache.set(cacheKey, response.data.articles.slice(0, 5)); // Store only 5 headlines

    return res.json(response.data.articles.slice(0, 5)); // Send the latest headlines
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch headlines.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
