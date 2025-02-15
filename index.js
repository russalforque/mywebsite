

var express = require("express")
var http = require('http')
var path = require('path')
var nodemailer = require('nodemailer');


var app  = express();
var server = http.server(app);
var port = 500;


app.set('port', port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "index.html")))

//Routing
app.get("/", function(req, response){
    response.sendFile(path.join(__dirname, "index.html"))
})

app.post("/send_email", function(req, response){
    var from = req.body.firstName;
    var from = req.body.email;
    var from = req.body.lastName;
    var from = req.body.phoneNumber;
    var from = req.body.message;

    var transporter = nodemailer.createTransport(
        {
            service: 'gmail',

            auth: {
                user: ''
            }
        }
    )
})
//initialize web server
server.listen(port, function(){
    console.log("starting server on port: " + port)
})