var express = require('express');
var router = express.Router();

//new code for the Assignment 13
//A little function to check if we have an authorized user and continue on or
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  }

const glove_controllers= require('../controllers/glove');
/* GET home page. */
router.get('/', glove_controllers.glove_view_all_Page);

//SS6
/* GET detail glove page */
router.get('/detail',secured, glove_controllers.glove_view_one_Page);

//SS7
/* GET create glove page */
router.get('/create',secured, glove_controllers.glove_create_Page);


//ss8
/* GET create update page */
router.get('/update',secured, glove_controllers.glove_update_Page);

router.get('/delete',secured, glove_controllers.glove_delete_Page);

module.exports = router;
