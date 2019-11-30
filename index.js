var express = require('express'),
    app = express();
    port = process.env.PORT || 3000,
    todoRoutes = require('./routes/todos');

app.get("/", function(res,res){
    res.send("Hello from root route"); 
})
//to use the initial route beginning
app.use('/api/todos', todoRoutes);

app.listen(port, function(){
    console.log("Server is starting");
})