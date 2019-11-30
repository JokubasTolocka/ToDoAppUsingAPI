var express = require('express'),
    router = express.Router(),
    db = require('../models');

router.get('/', function(req,res){
    //finds all todos
    db.Todo.find()
        .then(function(todos){
            res.json(todos);
        })
        .catch(function(err){
            res.send(err);
        })
});

router.post('/', function(req,res){
    //creates a new todo
    db.Todo.create(req.body)
        .then(function(newTodo){
            res.status(201).json(newTodo);
        })
        .catch(function(err){
            res.send(err);
        })
});

router.get('/:todoId', function(req,res){
    //getting the id out of the 
    db.Todo.findById(req.params.todoId)
        .then(function(foundTodo){
            res.json(foundTodo);
        })
        .catch(function(err){
            res.send(err);
        })
});

router.put('/:todoId', function(req,res){
    //update route {new: true} makes it so you wont get the old todo, instead you get the updated todo
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
        .then(function(todo){
            res.json(todo);
        })
        .catch(function(err){
            res.send(err);
        })
});

module.exports = router;