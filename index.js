var express = require('express'),
    app = express();
    port = process.env.PORT || 3000;

app.get("/", function(res,res){
    res.send("Hello"); 
})

app.listen(port, function(){
    console.log("Server is starting");
})