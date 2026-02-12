const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

const API_KEY = "3ENE93KBLLUP8KLE";

app.get("/", (req, res) => {
  res.send("AI PMS Backend Running");
});

app.get("/stock/:symbol", async (req, res) => {
  const symbol = req.params.symbol;

  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}.BSE&apikey=${API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  
