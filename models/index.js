var mongoose = require("mongoose");
//allows to see bugs
mongoose.set("debug", true);
mongoose.connect('mongodb://localhost/todoapinew');
//allows to use promise
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");