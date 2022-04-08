const express = require("express");
//const ejs=require("ejs");
app = express();
app.set('view engine', 'ejs');
app.get("/", function(req, res) {

  var date = new Date();
  var day = date.getDay();
  var currentDay = "";
  switch (day) {
    case 0:
      currentDay = "Sunday";

      break;
    case 1:
      currentDay = "Monday";

      break;
    case 2:
      currentDay = "Tuesday";

      break;
    case 3:
      currentDay = "Wednesday";

      break;
    case 4:
      currentDay = "Thursday";

      break;
    case 5:
      currentDay = "Friday";

      break;
    case 6:
      currentDay = "Saturday";

      break;
    default:
    console.log("Error invoked " + day);

  }
  res.render('list',{day:currentDay});

});

app.listen(3000,function(){
  console.log("Serve is live on port 3000");
});
