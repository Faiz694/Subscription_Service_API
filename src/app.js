const express = require('express');
require('dotenv').config();
const cors = require('cors');

const planRoutes = require('./routes/planRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use('/api/plans', planRoutes);
app.use('/api/subscriptions', subscriptionRoutes);

module.exports = app;
