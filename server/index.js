const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');

const app = express();
const PORT = 3333;

app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(require('./routes/familyRoutes'));

app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}`);
});
