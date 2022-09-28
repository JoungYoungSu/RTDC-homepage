var express = require("express");
 
//Express 호출 후 새로운 Express 애플리케이션을 변수(app)에 넣음
var app = express();

app.get("/", function(request, response){
    response.send("hello world!");
});

app.listen(80, function(){
    console.log("Express app running on port : 80");
}); 