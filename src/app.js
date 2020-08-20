const express = require('express');
const path = require('path');
const request = require('request');
const utils = require('./utils/utils');

const app = express();
const port = 3000;

const publicDirectryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectryPath))

app.get('',(req,res) => {
    res.send(path.join(__dirname, '../public/'));
});

app.get('/covid',(req,res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    utils(req.query.search, (error, { confirmed,deths,recovered,active} = {}) => {
        
       if( error ) {
           return res.send({
               error:error
            });
       } 

       res.send({
           confirmed: confirmed,
           deaths: deths,
           recovered: recovered,
           active: active
       });
    });
});

app.get('*', (req,res) => {
    res.send('My 404 page');
});

app.listen(port, () => {
    console.log('app is running');
});