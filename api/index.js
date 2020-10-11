require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = 4000;

var postMessageRoutes = require('./controllers/postMessageController');
const { connection } = require('mongoose');

var app = express()
app.use(bodyParser.json())
app.use(cors());
//app.use(cors({origin:'http://localhost:80'}))
app.listen(PORT, () => console.log(`Server started at : ${PORT}`))

app.use('/postMessages', postMessageRoutes)
