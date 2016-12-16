var Discordie = require('discordie');

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

//All Commands
client.Dispatcher.on(events.MESSAGE_CREATE, e => {
    if(!e.message.author.bot){
        if(e.message.content == '?bd ping'){
            e.message.channel.sendMessage('pong');
        }
    }
});

//All HELP commands.
client.Dispatcher.on(events.MESSAGE_CREATE, e => {
    if(!e.message.author.bot){
        if(e.message.content == '?bd help'){
            e.message.channel.sendMessage(e.message.author.mention+
                '\n\n__**LIST OF COMMANDS**__\n\n'+
                '?bd help - Brings up the help menu\n'+
                '?bd add - Adds the bot to your channel\n'+
                '?bd ping - Check if the bot is online\n'+
                '?bd news - Shows the most recent news'
            );
        }
    }
});
client.Dispatcher.on(events.MESSAGE_CREATE, e => {
    if(!e.message.author.bot){
        if(e.message.content == '?bd halp'){
            e.message.channel.sendMessage(e.message.author.mention+
                '\n\n__**LIST OF COMMANDS**__\n\n'+
                '**?bd help** - Brings up the help menu\n'+
                '**?bd add** - Adds the bot to your channel\n'+
                '**?bd ping** - Check if the bot is online\n'+
                '**?bd news** - Shows the most recent news'
            );
        }
    }
});

//Adding the bot to your server.
client.Dispatcher.on(events.MESSAGE_CREATE, e => {
    if(!e.message.author.bot){
        if(e.message.content == '?bd add'){
            e.message.channel.sendMessage(e.message.author.mention);
            e.message.channel.sendMessage('', false, {
                color: 0xFF0000,
                title: 'Click this to add me!',
                url: 'https://discordapp.com/oauth2/authorize?client_id=259115394588082176&scope=bot'
            });
        }
    }
});
client.Dispatcher.on(events.MESSAGE_CREATE, e => {
    if(!e.message.author.bot){
        if(e.message.content == '?bd addbot'){
            e.message.channel.sendMessage(e.message.author.mention);
            e.message.channel.sendMessage('', false, {
                color: 0xFF0000,
                title: 'Click this to add me!',
                url: 'https://discordapp.com/oauth2/authorize?client_id=259115394588082176&scope=bot'
            });
        }
    }
});
client.Dispatcher.on(events.MESSAGE_CREATE, e => {
    if(!e.message.author.bot){
        if(e.message.content == '?bd ad'){
            e.message.channel.sendMessage(e.message.author.mention);
            e.message.channel.sendMessage('', false, {
                color: 0xFF0000,
                title: 'Click this to add me!',
                url: 'https://discordapp.com/oauth2/authorize?client_id=259115394588082176&scope=bot'
            });
        }
    }
});

//All NEWS commands.
client.Dispatcher.on(events.MESSAGE_CREATE, e => {
    if(!e.message.author.bot){
        if(e.message.content == '?bd news'){
            e.message.channel.sendMessage(e.message.author.mention+
                ' https://www.blackdesertonline.com/news/view/283'
            );
        }
    }
});

//All TWITTER commands.
client.Dispatcher.on(events.MESSAGE_CREATE, e => {
    if(!e.message.author.bot){
        if(e.message.content == '?bd tweet'){
            e.message.channel.sendMessage(e.message.author.mention+
                ' https://twitter.com/BDO_News'
            );
        }
    }
});
