const express = require("express");
const bodyParser=require('body-parser');
//const ejs=require("ejs");
app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
var data=[];
var workData=[];
app.get("/", function(req, res) {


  var date = new Date();
  var options={year:'numeric',
  month:'numeric',
  weekday:'long',
  day:'numeric'
  };
  var curDate=date.toLocaleDateString('us-EN',options);

    res.render('list',{day:curDate,newListItem:data});

});


app.post('/',function(req,res){

console.log(req.body);
    if(req.body.button!="Work"){
    data.push(req.body.newEntry);
    res.redirect("/");
  }
  else {
    workData.push(req.body.newEntry);
    res.redirect('/work');
  }


  /*const newToDo=req.body.newEntry;
  const entry=document.createElement('li');
  entry.appendChild(document.createTextNode(newToDo));
  list.appendChild(entry);
  res.send("Done"); */

});

app.get('/work',function(req,res){
res.render('list',{day:"Work List" ,newListItem:workData});
});


app.listen(3000,function(){
  console.log("Serve is live on port 3000");
});
