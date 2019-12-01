// import { createTodo } from "../helpers/todos";

$(document).ready(function(){
    $.getJSON('api/todos')
        .then(addTodos)
    
    $('#todoInput').keypress(function(event){
        if(event.which == 13){
            createTodo();
        }
    })
});

function addTodos(todos){
    //add todos to the page
    todos.forEach(function(todo){
        addTodo(todo); 
    });

}

function createTodo(){
    //send request to create a new todo
    var userInput = $("#todoInput").val();
    $.post('api/todos',{name: userInput})
        .then(function(newTodo){
            addTodo(newTodo);
            $("#todoInput").val("");
        })
}

function addTodo(todo){
    var newTodo = $('<li class="todo grow">' + todo.name + '</li>');
    if(todo.completed){
        newTodo.addClass("done");
    }
    $('.list').append(newTodo);
}

