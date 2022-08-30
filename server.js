let express = require('express');

let fs = require('fs').promises;
let app = express()


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


app.listen(3000)