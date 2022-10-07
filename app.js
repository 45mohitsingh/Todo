const express = require("express");
const bodyParser= require("body-parser");
const date=require(__dirname+"/date.js");

const app=express();
let items=[];
let item="";
app.set('view engine','ejs');
workItem=[];
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",function(req,res){
    const day=date.getDate();
   
    res.render("list",{listday:day,newListItem:items});
    });


  app.post("/",function(req,res){
    item=req.body.newItem;
    console.log(req.body.toDoButton);
   if(item!=""){
    if(req.body.toDoButton==="work"){
      
      workItem.push(item);
      res.redirect("/work");
    }
   
    else{
   
     items.push(item);
     res.redirect("/");
    }
  }

  });




  app.get("/work",function(req,res){
    res.render("list",{listday:"work",newListItem:workItem})
  });
  // app.post("/work",function(req,res){
    
  // });

    app.listen(3000,function(){
        console.log("server started on port 3000");
    });