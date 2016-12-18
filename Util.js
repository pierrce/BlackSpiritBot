var Discordie = require('discordie');
var Time = require('./Time.js');

const events = Discordie.Events;

//All UTIL commands.
function Util(e){

    if(e.message.content == '?bd ping'){
        e.message.channel.sendMessage('pong');
        return true;
    }

    if(e.message.content == '?bd flip'){
        var x = Math.ceiling(Math.random()*2);
        if(x==1){e.message.channel.sendMessage('Heads')}
        if(x==2){e.message.channel.sendMessage('Tails')}
        return true;
    }

    if(e.message.content == '?bd website'){
        e.message.channel.sendMessage('https://www.blackdesertonline.com/');
        return true;
    }

    if(e.message.content == '?bd prices'){
        e.message.channel.sendMessage(e.message.author.mention);
        e.message.channel.sendMessage('', false, {
            color: 0xCD7F32,
            title: '\n\nStarters Package: $4.99',
            url: 'https://www.blackdesertonline.com/login?returnUrl=%2Fshop%2FPayment.html%3FgamePassGrade%3DGAMEPASS_STR'
        });
        e.message.channel.sendMessage('', false, {
            color: 0xC0C0C0,
            title: '\nTravelers Package: $14.99',
            url: 'https://www.blackdesertonline.com/login?returnUrl=%2Fshop%2FPayment.html%3FgamePassGrade%3DGAMEPASS_A'
        });
        e.message.channel.sendMessage('', false, {
            color: 0xFFD700,
            title: '\nExplorers Package: $24.99',
            url: 'https://www.blackdesertonline.com/login?returnUrl=%2Fshop%2FPayment.html%3FgamePassGrade%3DGAMEPASS_B'
        });
        return true;
    }

    if(e.message.content == '?bd timer'){
        x = Time.getNight();
        y = Time.getReset();
        z = Time.getDay();
        e.message.channel.sendMessage(e.message.author.mention+
            '\n\n__**Black Desert Timers**__\n\n'+
            '**Time Until Night: **'+x+
            '\n\n**Time Until Day: **'+z+
            '\n\n**Daily Reset: **'+y+
            '\n\n**In-Game Time: **'

        );
        return true;
    }

    return false;

}

module.exports = Util;
