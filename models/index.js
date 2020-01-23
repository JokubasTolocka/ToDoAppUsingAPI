var mongoose = require("mongoose");
//allows to see bugs
mongoose.set("debug", true);
mongoose.connect('mongodb://jokubasto:jokubasto123@ds211709.mlab.com:11709/heroku_bc9s0lk9', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
//allows to use promise
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");