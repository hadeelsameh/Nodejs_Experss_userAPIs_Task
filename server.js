const express = require('express');
const app = express()
const {checkAuthentication, LogAllRequests} = require("./MiddleWare");
const {saveUserController,ListUsersController,ViewUserController,UpdateUserController,DeleteUserController} = require("./UserController");


app.use(LogAllRequests());

app.get("/save-user", saveUserController)
app.get("/update-user/:id", UpdateUserController)
app.get("/list-users", checkAuthentication(), ListUsersController)
app.get("/delete-user/:id",checkAuthentication(), DeleteUserController)
app.get("/view-user-details/:id", checkAuthentication(), ViewUserController)

app.listen(3000)



/* Old user APIs*/
/*
app.get('/getusername', function (req, res) {

    let name = req.query.nn;
    let age= req.query.gg;
    
    fs.appendFile("text.txt",`${name} `).then(function(){});
    res.json({
        name: req.query.nn,
    });

})

app.get('/listusers', function (req, res) {

    let users=[] ;
    fs.readFile("text.txt").then(function(data){
        data = data.toString();
        users = data.split(" ");
        users.pop();
        res.json({
            users
        });
    });

    
})
*/