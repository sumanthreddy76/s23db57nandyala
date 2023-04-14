var express = require('express');
var router = express.Router();

const glove_controlers= require('../controllers/glove');
/* GET home page. */
router.get('/', glove_controlers.glove_view_all_Page);
module.exports = router;