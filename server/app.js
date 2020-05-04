const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('../routes/admin');
const shopRoutes = require('../routes/home');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../', 'public')));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// we listen on port 3000
app.use((req, res, next) => {
    res.status(404).render('404', {path: '/', pageTitle: 'Page Not Found'});
});

app.listen(3000);