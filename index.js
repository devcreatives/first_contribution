const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000

//Serves resources from public folder
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
const fs = require('fs');



app.get('/', (req, res) => {
    let rawdata = fs.readFileSync('./Data/member.json');
    let contributors = JSON.parse(rawdata);
    console.log(contributors);

    res.render('index', { members: contributors })
})

//connection to server

app.listen(PORT, error => {
    if (error) console.log("error is " + error);
    else console.log(`Server strted on port ${PORT}`);

});

// For running this project locally.
// app.listen(3000);