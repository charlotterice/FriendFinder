var path = require("path");

module.exports=function(app){
    app.get("./public/survey",function(request, response){
        response.sendFile(path.join(_dirname,"./public/survey.html"));
    });

    app.use(function(request,response){
        response.sendFile(path.join(_dirname, "./public/home.html"));
    })
}