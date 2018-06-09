var express = require('express');
var app = express();
var formRoutes = express.Router();

// Require Item model in our routes module
var Form = require('../models/Form');

// Defined store route
formRoutes.route('/add').post(function (req, res) {
  var form = new Form(req.body);
  form.save()
    .then(item => {
    res.status(200).json({'form': 'Form added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
formRoutes.route('/').get(function (req, res) {
    //console.log('getting you all forms');
    Form.find(function (err, forms){
    if(err){
      console.log(err);
    }
    else {
      res.json(forms);
    }
  });
});

// Defined get route
formRoutes.route('/:id').get(function (req, res) {
    //console.log('im trying to get you a form');
    
  var id = req.params.id;
  Form.findById(id, function (err, form){
      res.json(form);
  });
});

//  Defined update route
formRoutes.route('/submit/:id').post(function (req, res) {
    Form.findById(req.params.id, function(err, form) {
    if (!form)
      return next(new Error('Could not load Document'));
    else {
        //form.name = req.body.name;
        //form.questions = req.body.questions;
        form.subs_count++; 
        form.submissions.push(req.body)
        form.save().then(form => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
formRoutes.route('/delete/:id').get(function (req, res) {
    Form.findByIdAndRemove({_id: req.params.id}, function(err, form){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = formRoutes;