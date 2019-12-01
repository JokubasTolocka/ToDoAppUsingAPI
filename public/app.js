$(document).ready(function(){
    $.getJSON('api/todos')
        .then(addTodos)
    
    $('#todoInput').keypress(function(event){
        if(event.which == 13){
            createTodo();
        }
    })
    $('.list').on('click', 'li', function(){
        updateTodo($(this));
    })
    //deleting
    $('.list').on('click','span', function(e){
        //when we click on the span we dont get the li click response
        e.stopPropagation();
        //
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
    newTodo.data('completed', todo.completed);
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

function updateTodo(todo){
    var updateUrl = '/api/todos/' + todo.data('id');
    var isDone = !todo.data('completed');
    var updateData = {completed: isDone};
    $.ajax({
        method: 'PUT',
        url: updateUrl,
        data: updateData
    })
        .then(function(updatedTodo){
            todo.toggleClass('done');
            todo.data('completed', isDone);
        })
}

