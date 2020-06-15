const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NzIxMTAzODQ4NTA0MTY0NDA0.XuPqew.JZdNP-mC5X2AdhRe3kTHjfm9qOk';
var stf_count = 0;
const PREFIX = '!';
const words = ['stuffed', 'Stuffed', 'STUFFED', 'stuff', 'Stuff', 'STUFF'];

bot.on('Ready', () => {
    console.log('bot online');
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    // makes sure that the bot is not reading a message that the bot is sending 
    if(message.author.bot){
        return;
    }

    // if the message contains any of the words then it will add 1 to the stf_count
    for (var i = 0; i < words.length; i++) {
        if (message.content.includes(words[i])) {
          // message.content contains words;
          stf_count++;
          message.channel.send("dis guy has been stuffed " + stf_count + " times")
          break;
        }
      }

    // when !stf and !help is writen messages should appear
    switch(args[0]){
        case 'stf':
            message.channel.send("dis guy has been stuffed " + stf_count + " times")
        break;
        case 'help':
            message.channel.send('dis guy has only one command - !stf')
        break;
    }
})

bot.login(token);