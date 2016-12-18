var Discordie = require('discordie');
var Twitter = require('twitter');
var Client = new Twitter({
    consumer_key: 'Zu6IFPI5YYNGIGXyOITjsCNKM',
    consumer_secret: 'CnD49fiQgtIe3jP8jcWf26qXlnMMTK9Wgip8awQIQsrlgPwNvD',
    access_token_key: '4550063112-q2GWAQaUDV1HbvfmdXbf8UytXE9RopQCvEczFfY',
    access_token_secret: 'IRm0X6l0LUVuyQcU0zHbF4kskXnKHFdOK3eWJSEdKNbre'
});
var Params = {screen_name: 'BDO_News'};

const events = Discordie.Events;

//All UTIL commands.
function Social(e){

    //All NEWS commands.
    if(e.message.content == '?bd news'){
        e.message.channel.sendMessage(e.message.author.mention+
            ' https://www.blackdesertonline.com/news/view/283'
        );
        return true;
    }

    //All TWITTER commands.
    if(e.message.content == '?bd tweet'){
        Client.get('statuses/user_timeline', Params, function(error, tweets, response){
            e.message.channel.sendMessage(e.message.author.mention+
                '\n'+tweets[0].text
            );
        });
        return true;
    }

    if(e.message.content == '?bd tweets'){
        Client.get('statuses/user_timeline', Params, function(error, tweets, response){
            e.message.channel.sendMessage(e.message.author.mention+
                '\n'+tweets[0].text+'\n\n'+tweets[1].text+'\n\n'+tweets[2].text+'\n\n'+tweets[3].text
                +'\n\n'+tweets[4].text
            );
        });
        return true;
    }

    if(e.message.content == '?bd twitter'){
        Client.get('statuses/user_timeline', Params, function(error, tweets, response){
            e.message.channel.sendMessage(e.message.author.mention+
                'https://twitter.com/BDO_News'
            );
        });
        return true;
    }
    return false;
}

module.exports = Social;
