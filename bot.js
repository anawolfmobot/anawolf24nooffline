const Discord = require('discord.js');
const client = new Discord.Client();
const ownerid = '303311682929688577';
const adminprefix = "$";
const devs = ['303311682929688577'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
}

});

client.on('message',function(message) {
    let args = message.content.split(" ").slice(1).join(" ");
   if(message.content.startsWith(adminprefix + "setWatch")) {
       if(message.author.id !== '303311682929688577') return;
       client.user.setActivity(args,{type: 'WATCHING'});
       message.channel.send("**- :white_check_mark: Done!,**");
   } 
});
client.on('message',function(message) {
    let args = message.content.split(" ").slice(1).join(" ");
   if(message.content.startsWith(adminprefix + "setListen")) {
       if(message.author.id !== '303311682929688577') return;
       client.user.setActivity(args,{type: 'LISTENING'});
       message.channel.send("**- :white_check_mark: Done!,**");
   } 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
