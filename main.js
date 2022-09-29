const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", function(request, response){
    response.send("hello world!");
});

// Router 설정
const testRouter = require("./router/test.router");

// Router 주소 지정
app.use('/test', testRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(CODE.NOT_FOUND));
    next();
  });

app.listen(PORT, function(){
    console.log("Express app running on port : ", PORT);
}); 