const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
    // res.sendFile(__dirname + '/style.css');
})
app.get('/style.css', (req, res) =>{
    res.sendFile(__dirname + '/style.css')
});

app.listen(3000, ()=>{
    console.log('server is listening to post 300, http://localhost:3000');
})