// import { createTodo } from "../helpers/todos";

$(document).ready(function(){
    $.getJSON('api/todos')
        .then(addTodos)
    
    $('#todoInput').keypress(function(event){
        if(event.which == 13){
            createTodo();
        }
    })
    //deleting
    $('.list').on('click','span', function(){
        removeTodo($(this).parent());
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
    var newTodo = $('<li class="todo grow">' + todo.name + '<span><i class="fas fa-times fa-2x"></i></span>' + '</li>');
    newTodo.data('id', todo._id);
    if(todo.completed){
        newTodo.addClass("done");
    }
    $('.list').append(newTodo);
}

function removeTodo(todo){
    var clickedId =  todo.data('id');
        var deleteUrl = '/api/todos/' + clickedId;
        todo.remove();
        $.ajax({
            method: 'DELETE',
            url: deleteUrl
        })
            .then(function(data){
                todo.remove();
            })
}

