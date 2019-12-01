$(document).ready(function(){
    $.getJSON('api/todos')
        .then(addTodos)
});

function addTodos(todos){
    //add todos to the page
    todos.forEach(function(todo){
        var newTodo = $('<li class="todo">' + todo.name + '</li>');
        $('.list').append(newTodo);
    });

}