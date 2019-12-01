var express = require('express'),
    app = express();
    port = process.env.PORT || 3000,
    todoRoutes = require('./routes/todos'),
    bodyParser = require('body-parser');

//setting up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//setting up static directory
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get("/", function(res,res){
    res.sendFile("index.html");
})
//to use the initial route beginning
app.use('/api/todos', todoRoutes);

app.listen(port, function(){
    console.log("Server is starting");
})