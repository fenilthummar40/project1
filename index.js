const express = require ("express");
const port = 5000;
const app = express();
const path = require("path");

app.set("view engine","ejs");
app.use("/public",express.static(path.join(__dirname,"public")));


app.get("/",(req,res)=>{
    res.render("project-2");
});

app.get("/men", (req,res)=>{
    res.render("men");
});

app.get("/women", (req,res)=>{
    res.render("women");
});




app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started in port" + port);
});