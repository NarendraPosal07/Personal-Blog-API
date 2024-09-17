const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const blogRoutes = require('./routes/routes');
const path = require('path');
const db = require('./db/database')
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
db
app.use('/api/', blogRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});