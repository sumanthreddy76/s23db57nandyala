var glove = require('../models/glove');
// List of all glove
exports.glove_list = function(req, res) {
 res.send('NOT IMPLEMENTED: glove list');
};
// for a specific glove.
exports.glove_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: glove detail: ' + req.params.id);
};
// Handle glove create on POST.
exports.glove_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: glove create POST');
};
// Handle glove delete form on DELETE.
exports.glove_delete = function(req, res) {
 res.send('NOT IMPLEMENTED:  glove DELETE ' + req.params.id);
};
// Handle glove update form on PUT.
exports.glove_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: glove update PUT' + req.params.id);
};

// List of all Costumes
exports.glove_list = async function(req, res) {
    try{
    theGlove = await glove.find();
    res.send(theGlove);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // VIEWS
// Handle a show all view
exports.glove_view_all_Page = async function(req, res) {
    try{
    theGlove = await glove.find();
    res.render('glove', { title: 'glove Search Results', results: theGlove });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // Handle Costume create on POST.
exports.glove_create_post = async function(req, res) {
    console.log(req.body)
    let document = new glove();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.gun_name = req.body.gun_name;
    document.gun_weight = req.body.gun_weight;
    document.gun_manufacturer = req.body.gun_manufacturer;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };