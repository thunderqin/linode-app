/**
 * Created by qinguolei on 16/10/21.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    /*console.log(req.params.key);*/
    res.render('api/http', {});
});
router.get('/get', function(req, res, next) {
    var user_name = req.query.user || 'guolei';
  	var password = req.query.pw || 'nimei';

    res.json({user_name: user_name, password: password});
});
router.post('/post', function(req, res, next) {
    var user_name = req.body.user || 'guolei';
    var password = req.body.pw || 'nimei';

    res.json({user_name: user_name, password: password});
});
router.get('/jsonp', function(req, res, next) {
    
    res.jsonp({a:1,b:2,c:3});
});


module.exports = router;
