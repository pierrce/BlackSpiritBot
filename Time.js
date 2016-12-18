var clock = require('node-clock');
var hr;
var min;
var sec;
var totSecs = 14400;
var count = 0;

function Time(){

    var x = (
        (clock.tz(Date.valueOf(), "%H:%M", 'America/Chicago')).split(' ')[4]
    );

    hr = parseInt(x.split(':')[0]);
    min = parseInt(x.split(':')[1]);
    sec = parseInt(x.split(':')[2]);
}

function getNight(){
    Time();
    var ret = (3-((hr+3)%4))+" hrs "+(((40-min)+59)%60)+" min";
    return ret;
}

function getDay(){
    Time();
    var ret = (3-((hr+2)%4))+" hrs "+(((20-min)+59)%60)+" min";
    return ret;
}

function getTime(){
    Time();
    var ret = (3-((hr+2)%4))+" hrs "+(((20-min)+59)%60)+" min";
    return ret;
}

function getReset(){
    Time();
    var ret = ((((17-hr)+24)%24)+" hrs "+(59-min)+" min");
    return ret;
}

module.exports = { getNight, getDay, getTime, getReset }
