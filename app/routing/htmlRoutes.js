var path = require("path");

module.exports=function(app){
    app.get("/survey",function(request, response){
        response.sendFile(path.join(_dirname,"./app/public/survey.html"));
    });

    app.use(function(request,response){
        response.sendFile(path.join(_dirname, "./app/public/home.html"));
    })
}