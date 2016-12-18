var Discordie = require('discordie');

const events = Discordie.Events;

//All UTIL commands.
function Add(e){

    //Adding the bot to your server.
    if(e.message.content == '?bd add'){
        e.message.channel.sendMessage(e.message.author.mention);
        e.message.channel.sendMessage('', false, {
            color: 0xFF0000,
            title: 'Click this to add me!',
            url: 'https://discordapp.com/oauth2/authorize?client_id=259115394588082176&scope=bot'
        });
        return true;
    }

    if(e.message.content == '?bd addbot'){
        e.message.channel.sendMessage(e.message.author.mention);
        e.message.channel.sendMessage('', false, {
            color: 0xFF0000,
            title: 'Click this to add me!',
            url: 'https://discordapp.com/oauth2/authorize?client_id=259115394588082176&scope=bot'
        });
        return true;
    }

    if(e.message.content == '?bd ad'){
        e.message.channel.sendMessage(e.message.author.mention);
        e.message.channel.sendMessage('', false, {
            color: 0xFF0000,
            title: 'Click this to add me!',
            url: 'https://discordapp.com/oauth2/authorize?client_id=259115394588082176&scope=bot'
        });
        return true;
    }
    return false;
}

module.exports = Add;
