const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/add-user', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-user.html'));
});

router.post('/add-user', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;