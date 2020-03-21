const express = require('express');
const app = express();
const path=require('path');
//Serves resources from public folder
app.use(express.static(path.join(__dirname,'public'))); 
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    res.render('index')
})
//connection to server
app.listen(3000, error => {
    if (error) console.log("error is " + error);
    else console.log("listening to port " + 3000);

});