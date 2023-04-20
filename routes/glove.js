var express = require('express');
var router = express.Router();

const glove_controllers= require('../controllers/glove');
/* GET home page. */
router.get('/', glove_controllers.glove_view_all_Page);

//SS6
/* GET detail glove page */
router.get('/detail', glove_controllers.glove_view_one_Page);

//SS7
/* GET create glove page */
router.get('/create', glove_controllers.glove_create_Page);


//ss8
/* GET create update page */
router.get('/update', glove_controllers.glove_update_Page);

router.get('/delete', glove_controllers.glove_delete_Page);

module.exports = router;