const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('../routes/admin');
const shopRoutes = require('../routes/home');

app.use(bodyParser.urlencoded({extended: true}));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// we listen on port 3000
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '../', 'views', '404.html'));
});

app.listen(3000);