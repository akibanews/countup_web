const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/add-user', (req, res, next) => {
    res.render('add-user');
});

router.post('/add-user', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

exports.routes = router;
