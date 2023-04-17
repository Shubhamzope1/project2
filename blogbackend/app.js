const express = require('express');
const routes = require('./routes/index');
const mongoose = require('mongoose');
const cors = require('cors');
require ("dotenv").config()
const PORT = process.env.PORT;
const host = 'localhost';
const app = express();
app.use(cors());  //incoming request hadler
app.options("*", cors());
app.use(express.json());
app.use('/', routes); //all incoming req will be redirected 
//DataBase connectivity                    databasename
mongoose.connect(process.env.MONGDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        //it creates server
        app.listen(process.env.PORT, host, () => {
            console.log(`server is running  at ${host}:${PORT}`);

        });
    }).catch(err => console.log(err))