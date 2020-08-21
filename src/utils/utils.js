const request = require('request');
const express = require('express');

const utils = (country, callback) => {
    const URL = 'https://api.covid19api.com/total/country/'+country+'';

    request({url: URL,json: true}, (error,res)=> {
        if(error) {
            callback('Unable to connect to location server',undefined);
        } else if(res.body.message == 'Not Found') {
            callback('Unable to find location',undefined);
        } else {
            
            callback(undefined,{
                    confirmed: res.body[res.body.length - 1].Confirmed,
                    deaths: res.body[res.body.length - 1].Deaths,
                    recovered: res.body[res.body.length - 1].Recovered,
                    active: res.body[res.body.length -1].Active,
                    country: res.body[res.body.length -1].Country,
                    
                    todayconfirmed: ((res.body[res.body.length - 1].Confirmed)-(res.body[res.body.length - 2].Confirmed)),
                    todaydeaths: ((res.body[res.body.length - 1].Deaths)-(res.body[res.body.length - 2].Deaths)),
                    todayrecovered: ((res.body[res.body.length - 1].Recovered)-(res.body[res.body.length - 2].Recovered)),

            });
        }
    });
 };

// const utils = (country, callback) => {
//     var datetime = new Date(); //get date object
//     var currentDate = datetime.toISOString().slice(0,10);//slice the date from date object

//     const url = 'https://api.covid19api.com/country/'+country+'/status/confirmed?from=2020-01-01T00:00:00Z&to='+ currentDate +'T00:00:00Z';
//             //Url for COVID-19 API

//             request({url: url, json: true}, (error,res) => {
                
//                 var i;
             
//                  let january = [];
//                 let february = [];
//                 let march = [];
//                 let april = [];
//                 let may = [];
//                 let june = [];
//                 let july = [];
//                 let august = [];
//                 let september = [];
//                 let october = [];
//                 let november = [];
//                 let december = [];
                
//                 let january21 = [];
//                 let february21 = [];
//                 let march21 = [];
//                 let april21 = [];
//                 let may21 = [];

//                 if(error) { //if connection failed
//                     callback('Unable to connect to location service',undefined);
//                 }else if(res.body.length == 0) {//if user give wrong country name
//                     callback('Unable to find location',undefined);
//                 } else { //if connect successfully
//                     for(i = 0 ; i < res.body.length ; i++ ){
//                         if(res.body[i].Date.slice(0,4) == 2020) {//If the months in 2020
//                             if(res.body[i].Date.slice(5,7) == 01) {
//                                 callback(undefined,january[i]  = res.body[i].Cases);//january 2020
//                                     } else if(res.body[i].Date.slice(5,7) == 02) {
//                                         callback(undefined,february[i-(january.length)] = res.body[i].Cases);//february 2020
//                                             } else if(res.body[i].Date.slice(5,7) == 03) {
//                                                 callback(undefined, march[i-(january.length + february.length)] = res.body[i].Cases);
//                                                     } else if(res.body[i].Date.slice(5,7) == 04) {
//                                                         callback(undefined,april[i-(january.length + february.length + march.length)] = res.body[i].Cases);
//                                                             } else if(res.body[i].Date.slice(5,7) == 05) {
//                                                                 callback(undefined,may[i-(january.length + february.length + march.length + april.length)] = res.body[i].Cases);
//                                                             } else if(res.body[i].Date.slice(5,7) == 06) {
//                                                                 callback(undefined,june[i-(january.length + february.length + march.length + april.length + may.length)] = res.body[i].Cases);
//                                                     } else if(res.body[i].Date.slice(5,7) == 07) {
//                                                         callback(undefined,july[i-(january.length + february.length + march.length + april.length + may.length + june.length)] = res.body[i].Cases);
//                                             } else if(res.body[i].Date.slice(5,7) == 08) {
//                                                 callback(undefined,august[i-(january.length + february.length + march.length + april.length + may.length + june.length + july.length)] = res.body[i].Cases);
//                                     } else if(res.body[i].Date.slice(5,7) == 09) {
//                                         callback(undefined,september[i-(january.length + february.length + march.length + april.length + may.length + june.length + july.length + august.length)] = res.body[i].Cases);
//                             } else if(res.body[i].Date.slice(5,7) == 10) {
//                                 callback(undefined,october[i-(january.length + february.length + march.length + april.length + may.length + june.length + july.length + august.length + september.length)] = res.body[i].Cases);
//                             } else if(res.body[i].Date.slice(5,7) == 11) {
//                                 callback(undefined,november[i-(january.length + february.length + march.length + april.length + may.length + june.length + july.length + august.length + september.length + october.length)] = res.body[i].Cases);
//                                     } else if(res.body[i].Date.slice(5,7) == 12) {
//                                         callback(undefined,december[i-(january.length + february.length + march.length + april.length + may.length + june.length + july.length + august.length + september.length + october.length + november.length)] = res.body[i].Cases);
//                                             }
//                                         }  
            
            
//                                         else    { //if 2021 months
//                                             if(res.body[i].Date.slice(5,7) == 01) {
//                                                 callback(undefined,january21[i] = res.body[i].Cases);
//                                                     } else if(res.body[i].Date.slice(5,7) == 02) {
//                                                         callback(undefined,february21[i-(january21.length)] = res.body[i].Cases);
//                                                             } else if(res.body[i].Date.slice(5,7) == 03) {
//                                                                 callback(undefined,march21[i-(january21.length + february21.length)] = res.body[i].Cases);
//                                                             } else if(res.body[i].Date.slice(5,7) == 04) {
//                                                                 callback(undefined, april21[i-(january21.length + february21.length + march21.length)] = res.body[i].Cases);
//                                                     } else if(res.body[i].Date.slice(5,7) == 05) {
//                                                         callback(undefined,may21[i-(january21.length + february21.length + march21.length + april21.length)] = res.body[i].Cases);
//                                                                         }
            
            
                                       
//                                         }
//                                     }
//                 }
                
                
              
//         } );   
        
       
// }
 
 module.exports = utils;
