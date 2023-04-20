var glove = require('../models/glove');
// List of all glove
exports.glove_list = function (req, res) {
    res.send('NOT IMPLEMENTED: glove list');
};
// for a specific glove.
exports.glove_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await glove.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle glove create on POST.
exports.glove_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: glove create POST');
};
// Handle glove delete form on DELETE.
exports.glove_delete = function (req, res) {
    res.send('NOT IMPLEMENTED:  glove DELETE ' + req.params.id);
};
// Handle glove update form on PUT.
exports.glove_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await glove.findById( req.params.id)
    // Do updates of properties
    if(req.body.gun_name)
    toUpdate.gun_name = req.body.gun_name;
    if(req.body.gun_weight) toUpdate.gun_weight = req.body.gun_weight;
    if(req.body.gun_manufacturer) toUpdate.gun_manufacturer = req.body.gun_manufacturer;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };

// List of all Costumes
exports.glove_list = async function (req, res) {
    try {
        theGlove = await glove.find();
        res.send(theGlove);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.glove_view_all_Page = async function (req, res) {
    try {
        theGlove = await glove.find();
        res.render('glove', { title: 'glove Search Results', results: theGlove });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// Handle Costume create on POST.
exports.glove_create_post = async function (req, res) {
    console.log(req.body)
    let document = new glove();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.gun_name = req.body.gun_name;
    document.gun_weight = req.body.gun_weight;
    document.gun_manufacturer = req.body.gun_manufacturer;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// code for Screnshot 4 and 5
// Handle glove delete on DELETE.
exports.glove_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await glove.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

   // code for SS6

   // Handle a show one view with id specified by query
exports.glove_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await glove.findById( req.query.id)
    res.render('glovedetail',
   { title: 'glove Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   //code for SS7
   // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.glove_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('glovecreate', { title: 'glove Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   //code for SS8
   // Handle building the view for updating a costume.
// query provides the id
exports.glove_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await glove.findById(req.query.id)
    res.render('gloveupdate', { title: 'glove Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   exports.glove_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await glove.findById(req.query.id)
    res.render('glovedelete', { title: 'glove Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };