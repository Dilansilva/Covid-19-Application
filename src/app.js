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
            error: 'Unable to find location!try another'
        })
    }

    utils(req.query.search, (error, { confirmed,
                                        deaths,
                                            recovered,
                                                active,
                                            todayconfirmed,
                                        todaydeaths,
                                    todayrecovered
                                                } = {}) => {
        
       if( error ) {
           return res.send({
               error:error
            });
       } 
       
       res.send({
           confirmed: confirmed,
           deaths: deaths,
           recovered: recovered,
           active: active,
           country: req.query.search,
           todayconfirmed: todayconfirmed,
           todaydeaths: todaydeaths,
           todayrecovered: todayrecovered
       });
    });
});

app.get('*', (req,res) => {
    res.send('My 404 page');
});

app.listen(port, () => {
    console.log('app is running');
});