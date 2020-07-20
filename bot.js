const Discord = require("discord.js");
const myid = ['287898437058560000']
const prefix = ['.'];
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client();
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client();
const client20 = new Discord.Client();
const client21 = new Discord.Client();
const client22 = new Discord.Client();
const client23 = new Discord.Client();
const client24 = new Discord.Client();
const client25 = new Discord.Client();
const client26 = new Discord.Client();
const client27 = new Discord.Client();
const client28 = new Discord.Client();
const client29 = new Discord.Client();
const client30 = new Discord.Client();
const client31 = new Discord.Client();
const client32 = new Discord.Client();
const client33 = new Discord.Client();
const client34 = new Discord.Client();
const client35 = new Discord.Client();
const client36 = new Discord.Client();
const client37 = new Discord.Client();
const client38 = new Discord.Client();
const client39 = new Discord.Client();
const client40 = new Discord.Client();
const client41 = new Discord.Client();
const client42 = new Discord.Client();
const client43 = new Discord.Client();
const client44 = new Discord.Client();
const client45 = new Discord.Client();
const client46 = new Discord.Client();
const client47 = new Discord.Client();
const client48 = new Discord.Client();
const client49 = new Discord.Client();
const client50 = new Discord.Client();
const client51 = new Discord.Client();
const client52 = new Discord.Client();
const client53 = new Discord.Client();
const client54 = new Discord.Client();
const client55 = new Discord.Client();
const client56 = new Discord.Client();
const client57 = new Discord.Client();
const client58 = new Discord.Client();
const client59 = new Discord.Client();
const client60 = new Discord.Client();

client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
client5.login(process.env.TOKEN5);
client6.login(process.env.TOKEN6);
client7.login(process.env.TOKEN7); 
client8.login(process.env.TOKEN8); 
client9.login(process.env.TOKEN9); 
client10.login(process.env.TOKEN10); 
client11.login(process.env.TOKEN11); 
client12.login(process.env.TOKEN12); 
client13.login(process.env.TOKEN13); 
client14.login(process.env.TOKEN14); 
client15.login(process.env.TOKEN15); 
client16.login(process.env.TOKEN16); 
client17.login(process.env.TOKEN17); 
client18.login(process.env.TOKEN18); 
client19.login(process.env.TOKEN19); 
client20.login(process.env.TOKEN20); 
client21.login(process.env.TOKEN21); 
client22.login(process.env.TOKEN22); 
client23.login(process.env.TOKEN23); 
client24.login(process.env.TOKEN24); 
client26.login(process.env.TOKEN26); 
client27.login(process.env.TOKEN27); 
client28.login(process.env.TOKEN28); 
client29.login(process.env.TOKEN29); 
client30.login(process.env.TOKEN30); 
client31.login(process.env.TOKEN31); 
client32.login(process.env.TOKEN32); 
client33.login(process.env.TOKEN33); 
client34.login(process.env.TOKEN34); 
client35.login(process.env.TOKEN35); 
client36.login(process.env.TOKEN36); 
client37.login(process.env.TOKEN37); 
client38.login(process.env.TOKEN38); 
client39.login(process.env.TOKEN39); 
client40.login(process.env.TOKEN40); 
client41.login(process.env.TOKEN41); 
client42.login(process.env.TOKEN42); 
client43.login(process.env.TOKEN43); 
client44.login(process.env.TOKEN44); 
client45.login(process.env.TOKEN45); 
client46.login(process.env.TOKEN46); 
client47.login(process.env.TOKEN47); 
client48.login(process.env.TOKEN48); 
client49.login(process.env.TOKEN49); 
client50.login(process.env.TOKEN50); 
client51.login(process.env.TOKEN51); 
client52.login(process.env.TOKEN52); 
client53.login(process.env.TOKEN53); 
client54.login(process.env.TOKEN54); 
client55.login(process.env.TOKEN55); 
client56.login(process.env.TOKEN56); 
client57.login(process.env.TOKEN57); 
client58.login(process.env.TOKEN58); 
client59.login(process.env.TOKEN59); 
client60.login(process.env.TOKEN60); 







client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      
  if (message.content.startsWith(prefix + 'pl')) {
    client.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(aprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(aprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(prefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/i_kahrba999");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

client2.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(prefix + '2pl')) {
    client.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(aprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(aprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(prefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/i_kahrba999");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
