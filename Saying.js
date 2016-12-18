var Discordie = require('discordie');
var Sayings = ["Check out my teeth!"];

const events = Discordie.Events;

//All UTIL commands.
function Saying(e){

    if(e.message.content.split(" ")[0] == '?bd'){
        var x = Math.floor(Math.random() * Sayings.length);
        e.message.channel.sendMessage(Sayings[x]);
    }

}

module.exports = Saying;
