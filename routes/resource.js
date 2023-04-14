var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var glove_controller = require('../controllers/glove');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// glove ROUTES ///
// POST request for creating a glove.
router.post('/glove', glove_controller.glove_create_post);
// DELETE request to delete glove.
router.delete('/glove/:id', glove_controller.glove_delete);
// PUT request to update glove.
router.put('/glove/:id', glove_controller.glove_update_put);
// GET request for one glove.
router.get('/glove/:id', glove_controller.glove_detail);
// GET request for list of all glove items.
router.get('/glove', glove_controller.glove_list);
module.exports = router;