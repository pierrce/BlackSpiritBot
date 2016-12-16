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
    if(e.message.content == '?bd help' || '?bd halp' || '?bd'){
      console.log(e.message.author.username);
      e.message.channel.sendMessage(
        'To get more in-depth information on commands, type: ?bd <command> help\n'+
        '?bd pong - To test if the Bot is functioning correctly.\n'+
        '?bd news - To display the most recent news article from the Black Desert Website\n'+
        '?bd add - Link to add this bot to your server.\n'+
        '?bd support - Displays ways to contact the creator.'
      );
    }
  }
});

client.Dispatcher.on(events.MESSAGE_CREATE, e => {
  if(e.message.content == '?bd ping'){
    e.message.channel.sendMessage('pong');
  }
});
