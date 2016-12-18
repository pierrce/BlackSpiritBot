var Discordie = require('discordie');

const events = Discordie.Events;

function Help(e){
    if(e.message.content == '?bd help'){
        e.message.channel.sendMessage(e.message.author.mention+
            '\n\n__**LIST OF COMMANDS**__\n\n'+
            '**?bd help** - Brings up the help menu\n'+
            '**?bd add** - Adds the bot to your channel\n'+
            '**?bd ping** - Check if the bot is online\n'+
            '**?bd news** - Shows the most recent news\n'+
            '**?bd twitter help** - Shows twitter commands'
        );
        return true;
    }

    if(e.message.content == '?bd halp'){
        e.message.channel.sendMessage(e.message.author.mention+
            '\n\n__**LIST OF COMMANDS**__\n\n'+
            '**?bd help** - Brings up the help menu\n'+
            '**?bd add** - Adds the bot to your channel\n'+
            '**?bd ping** - Check if the bot is online\n'+
            '**?bd news** - Shows the most recent news\n'+
            '**?bd twitter help** - Shows twitter commands'
        );
        return true;
    }

    if(e.message.content == '?bd twitter help'){
        e.message.channel.sendMessage(e.message.author.mention+
            '\n\n__**LIST OF TWITTER COMMANDS**__\n\n'+
            '**?bd tweet** - Most recent tweet\n'+
            '**?bd twitter** - Profile of BDO_News\n'+
            '**?bd tweets** - Last five tweets\n'
        );
        return true;
    }

    return false;

}

module.exports = Help;
