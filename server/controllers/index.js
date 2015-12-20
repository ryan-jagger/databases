var models = require('../models');
var bluebird = require('bluebird');
var db = require('../orm-resources/ourSequelize');


module.exports = {
  messages: {
    get: function (req, res) {

      db.Message.findAll().then(function(messages){
        res.status(200).json({'results': messages});
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      db.User.findOrCreate({where: {username: req.body.username}}).spread(function(user, created){
        console.log(user.userid, 'returned user');
        db.Message.create({
          text: req.body.text,
          roomname: req.body.roomname,
        });
        res.status(201).send(req.body);
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {

    }
  }
};
