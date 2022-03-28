//import express frame work
const express = require("express");
//initiate express app 
const app = express();
const port =3000;
const facilities = [{
    name: "tents"    
},{
    name: "hall"
}]

app.get('/', (req, res) => {
    res.send('Hello World, from Ademola Omosanya')
});

app.get('/facilities', (req, res) => {
    res.send(facilities)
});

app.listen(port, () => console.log(`Hello World listening to ${port}`))
