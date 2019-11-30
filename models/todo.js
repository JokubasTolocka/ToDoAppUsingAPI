var mongoose = require("mongoose");
//setting up the schema
var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank'
    },
    completed:{
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})
//name
//completed
//created date
var Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;

