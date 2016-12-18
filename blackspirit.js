var Discordie = require('discordie');
var Help = require('./Help.js');
var Util = require('./Util.js');
var Add = require('./Add.js');
var Social = require('./Social.js');
var Saying = require('./Saying.js');

const events = Discordie.Events;
const client = new Discordie();

//Connect bot to discord application servers.
client.connect({
  token: 'MjU5MTE1Mzk0NTg4MDgyMTc2.CzTHlA.RF4ZHKeoh8sTiCH2NqBfy5gY_tk'
});

//Connect to all channels.
client.Dispatcher.on(events.GATEWAY_READY, e => {
  console.log('Connected as: ' + client.User.username);
});

//Check all commands
client.Dispatcher.on(events.MESSAGE_CREATE, e => {
    var isCommand = false;

    if(!e.message.author.bot){

        if(!isCommand){isCommand = Help(e)}

        if(!isCommand){isCommand = Util(e)}

        if(!isCommand){isCommand = Add(e)}

        if(!isCommand){isCommand = Social(e)}

        if(!isCommand){new Saying(e)}

    }
});
