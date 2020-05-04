

const users = [];

exports.getAddUser = (req, res, next) => {
    res.render('add-user', {path:'/admin/add-user', pageTitle:'Register'});
};

exports.postAddUser = (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
};