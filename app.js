const express = require('express');
const app = express();
const path = require('path')
const port = process.env.port || 8080;

app.set ('view engine','html');
app.set('view', __dirname + '/views');
app.use(express.static(__dirname +'/public'));

app.get('/', (req, res)=>{
    res.send('oofed')
    // res.sendFile(path.join(__dirname+'/views/index.html'))
});

app.listen(port, ()=>{
    console.log(`server started on ${port}`);
});