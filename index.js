
const express = require("express");
const fs = require("fs");
const sharp = require("sharp");
const {Client} = require("pg");
const ejs = require("ejs");
const { render } = require("express/lib/response");
const sass = require("sass");
const formidable = require("formidable");
const crypto = require("crypto");
const session = require("express-session");
const nodemailer = require("nodemailer");
const cors = require("cors");
const winston = require("winston");


const res = require("express/lib/response");
const { request } = require("http");
const { getMaxListeners } = require("process");


// import path from 'path';
// import {fileURLToPath} from 'url';


const app = express();



app.set("view engine", "ejs");

app.use("/resurse", express.static(__dirname +"/resurse"))

app.use(cors());

console.log("Director proiect:", __dirname);

const obGlobal = {
    obSucursale: null,
    emailServer: "bcrgeorge@getMaxListeners.ro"
}

app.get(["/", "/home", "/index", "/appointment"], function(req, res) {
    res.render("pagini/home");  
});

app.get("/captcha", function(req, res) {
    res.render("pagini/captcha");  
});

app.get("/subjectOptions", function(req, res){
    res.render("pagini/subjectOptions");
});

app.get("/harta", function(req, res) {
    res.render("pagini/harta");  
});

app.get("/branches", function(req, res) {
     
    console.log("am intrat in branches");
    res.render("pagini/branches"); 
});

app.get("/data", function(req, res) {
    var buf = fs.readFileSync("./resurse/json/sucursale.json", "utf8");
    obGlobal.obSucursale = JSON.parse(buf);
    res.setHeader("Content-Type", "application/json");
    res.json(obGlobal.obSucursale);
});

var sucs = JSON.parse(fs.readFileSync("./resurse/json/sucursale.json", "utf8"));
var sucsParsed = sucs.serviceResponse;
console.log(sucsParsed);


app.get("/appoint/:orgId", function(req, res) {
    
    console.log(req, res);
    var orgId = +req.params.orgId;
    var suc = sucsParsed.find(s => s.orgId == orgId)
    
    res.render("pagini/appoint", {suc: suc});
    console.log("A intrat in appoint")
    

});

app.get("/sentmail", function(req, res) {
    trimiteMail()
    res.render("pagini/sentmail");
    console.log("A intrat in sentmail")
});


// app.post("/branches", function(req, res) {
//     console.log("A intrat in post");
    
// });


app.listen(8080);
console.log("A pornit")


