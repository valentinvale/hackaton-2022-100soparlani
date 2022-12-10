
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


const res = require("express/lib/response");
const { request } = require("http");


// import path from 'path';
// import {fileURLToPath} from 'url';


const app = express();

app.set("view engine", "ejs");

app.use("/resurse", express.static(__dirname +"/resurse"))

app.use(cors());

console.log("Director proiect:", __dirname);

const obGlobal = {
    obSucursale: null
}

app.get(["/", "/home", "/index", "/appointment"], function(req, res) {
    res.render("pagini/index");  
});

app.get("/branches", function(req, res) {
     
    
    res.render("pagini/branches"); 
});

app.get("/data", function(req, res) {
    var buf = fs.readFileSync("./resurse/json/sucursale.json", "utf8");
    obGlobal.obSucursale = JSON.parse(buf);
    res.setHeader("Content-Type", "application/json");
    res.json(obGlobal.obSucursale);
});


// app.post("/branches", function(req, res) {
//     console.log("A intrat in post");
    
// });


app.listen(8080);
console.log("A pornit")


