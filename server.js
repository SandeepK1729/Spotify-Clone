require("dotenv").config();
require("express-async-errors");
const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth')

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/login', authRoutes);

const port = process.env.PORT || 5050;

const connection_to_db = require('./db');
connection_to_db();

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})