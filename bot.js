const Discord = require('discord.js');
const client = new Discord.Client();
const ownerid = '303311682929688577';
const adminprefix = ".";
const devs = ['303311682929688577'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setG')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
}

});

client.on('message',function(message) {
        let args = message.content.split(" ").slice(1).join(" ");
       if(message.content.startsWith(adminprefix + "setW")) {
           if(message.author.id !== '303311682929688577') return;
           client.user.setActivity(args,{type: 'WATCHING'});
           message.channel.send("**- :white_check_mark: Done!,**");
       } 
    });
    client.on('message',function(message) {
        let args = message.content.split(" ").slice(1).join(" ");
       if(message.content.startsWith(adminprefix + "setL")) {
           if(message.author.id !== '303311682929688577') return;
           client.user.setActivity(args,{type: 'LISTENING'});
           message.channel.send("**- :white_check_mark: Done!,**");
       } 
    });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOTT_TOKEN);
const another = new Discord.Client();
const owneridd = '279971558804422666';
const adminprefixx = "$";
const devss = ['279971558804422666'];
another.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devss.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefixx + 'setG')) {
  another.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
}

});

another.on('message',function(message) {
        let args = message.content.split(" ").slice(1).join(" ");
       if(message.content.startsWith(adminprefixx + "setW")) {
           if(message.author.id !== '279971558804422666') return;
           another.user.setActivity(args,{type: 'WATCHING'});
           message.channel.send("**- :white_check_mark: Done!,**");
       } 
    });
    another.on('message',function(message) {
        let args = message.content.split(" ").slice(1).join(" ");
       if(message.content.startsWith(adminprefixx + "setL")) {
           if(message.author.id !== '279971558804422666') return;
           another.user.setActivity(args,{type: 'LISTENING'});
           message.channel.send("**- :white_check_mark: Done!,**");
       } 
    });

// THIS  MUST  BE  THIS  WAY
another.login(process.env.BOTT_TOKEN);
