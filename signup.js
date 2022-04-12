const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


let userData = [];

app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/signup', (req, res) => {
    const user = req.body;

  
    console.log(user);
    userData.push(user);

    res.send('Account created sucessfully');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));