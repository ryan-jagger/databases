var Sequelize = require("sequelize");
var sequelize = new Sequelize("chatter", "root", "");


var User = sequelize.define('User', {
  userid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    unique: true
  },
  username: {type:Sequelize.STRING, unique: true, primaryKey: true}
});

var Message = sequelize.define('Message', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

User.hasMany(Message, {as: 'message'});
Message.belongsTo(User);

User.sync();
Message.sync();


exports.User = User;
exports.Message = Message;
