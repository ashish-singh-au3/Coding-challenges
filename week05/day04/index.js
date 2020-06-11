var express = require("express");

var app = express();

var contacts = [{
    name: "Name",
    phone: "phone-no"
}]
//create
app.post("/", function(req,res){
    res.send(contacts)
    //read
    app.get("/", function(req,res){
        res.send(contacts)
        //update
        app.put("/", function(req,res){
            res.send(contacts)
                //delete
            app.delete("/", function(req,res){
                res.send(contacts)
})
app.listen(4000, function() {console.log("App running at 4000")});

