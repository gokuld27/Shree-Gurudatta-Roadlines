const express = require('express');

const log = console.log;
const app  = express();
const path = require('path');

const PORT = 8080;
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


app.post('/email',(req,res) => {
    res.json({message: 'Message Recieved!!!'})
});


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'SendMessage', 'Mailhtml.html'));
})


app.listen(PORT, () => log("Server is Starting",8080));