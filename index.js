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

const res = require("express/lib/response");
const { request } = require("http");

app = express();

app.get(["/", "/home", "/index", "/appointment"], function(req, res) {
    res.render("pagini/index.ejs");  
});


app.listen(8080);
console.log("A pornit")