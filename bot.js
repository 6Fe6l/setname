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
client25.login(process.env.TOKEN25); 
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







 const developers = ["287898437058560000","222810335902564353","id 3","id 4"] 
  client.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
      } else if(message.content.startsWith(prefix + 'setWatching')) {
          client.user.setActivity(argresult,{type: 'WATCHING'});
  
        } else if(message.content.startsWith(prefix + 'setListening')) {
          client.user.setActivity(argresult,{type: 'LISTENING'});
  
        } else if(message.content.startsWith(prefix + 'pl1')) {
          client.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'setName')) {
          client.user.setUsername(argresult);
  
        } else if(message.content.startsWith(prefix + 'avatar')) {
          client.user.setAvatar(argresult);
  
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client.user.setStatus(argresult);
  
  
      }
  
    });


 client2.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client2.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
      } else if(message.content.startsWith(prefix + 'setWatching')) {
          client2.user.setActivity(argresult,{type: 'WATCHING'});
  
        } else if(message.content.startsWith(prefix + 'setListening')) {
          client2.user.setActivity(argresult,{type: 'LISTENING'});
  
        } else if(message.content.startsWith(prefix + 'pl2')) {
          client2.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'setName')) {
          client2.user.setUsername(argresult);
  
        } else if(message.content.startsWith(prefix + 'avatar2')) {
          client2.user.setAvatar(argresult);
  
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client2.user.setStatus(argresult);
  
  
      }
  
    });


client3.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client3.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
        } else if(message.content.startsWith(prefix + 'pl3')) {
          client3.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'avatar3')) {
          client3.user.setAvatar(argresult);
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client3.user.setStatus(argresult);
  
      }
  
    });

     client4.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client4.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
        } else if(message.content.startsWith(prefix + 'pl4')) {
          client4.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'avatar4')) {
          client4.user.setAvatar(argresult);
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client4.user.setStatus(argresult);
  
      }
  
    });

     client5.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client5.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
        } else if(message.content.startsWith(prefix + 'pl5')) {
          client5.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'avatar5')) {
          client5.user.setAvatar(argresult);
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client5.user.setStatus(argresult);
  
      }
  
    });

     client6.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client6.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
        } else if(message.content.startsWith(prefix + 'pl6')) {
          client6.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'avatar6')) {
          client6.user.setAvatar(argresult);
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client6.user.setStatus(argresult);
  
      }
  
    });

     client7.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client7.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
        } else if(message.content.startsWith(prefix + 'pl7')) {
          client7.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'avatar7')) {
          client7.user.setAvatar(argresult);
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client7.user.setStatus(argresult);
  
      }
  
    });

    
     client8.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client8.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
        } else if(message.content.startsWith(prefix + 'pl8')) {
          client8.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'avatar8')) {
          client8.user.setAvatar(argresult);
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client8.user.setStatus(argresult);
  
      }
  
    });

    
     client9.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client9.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
        } else if(message.content.startsWith(prefix + 'pl9')) {
          client9.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'avatar9')) {
          client9.user.setAvatar(argresult);
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client9.user.setStatus(argresult);
  
      }
  
    });



     client10.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client10.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
        } else if(message.content.startsWith(prefix + 'pl10')) {
          client10.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'avatar10')) {
          client10.user.setAvatar(argresult);
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client10.user.setStatus(argresult);
  
      }
  
    });

    
     client11.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client11.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
        } else if(message.content.startsWith(prefix + 'pl11')) {
          client11.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'avatar11')) {
          client11.user.setAvatar(argresult);
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client11.user.setStatus(argresult);
  
      }
  
    });

    
     client12.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client12.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
        } else if(message.content.startsWith(prefix + 'pl12')) {
          client12.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'avatar12')) {
          client12.user.setAvatar(argresult);
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client12.user.setStatus(argresult);
  
      }
  
    });

    
     client13.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client13.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
        } else if(message.content.startsWith(prefix + 'pl13')) {
          client13.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'avatar13')) {
          client13.user.setAvatar(argresult);
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client13.user.setStatus(argresult);
  
      }
  
    });

 
     client14.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client14.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
        } else if(message.content.startsWith(prefix + 'pl14')) {
          client14.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'avatar14')) {
          client14.user.setAvatar(argresult);
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client14.user.setStatus(argresult);
  
      }
  
    });

     client15.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client15.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
        } else if(message.content.startsWith(prefix + 'pl5')) {
          client15.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'avatar15')) {
          client15.user.setAvatar(argresult);
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client15.user.setStatus(argresult);
  
      }
  
    });


     client16.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client16.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
        } else if(message.content.startsWith(prefix + 'pl16')) {
          client16.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'avatar16')) {
          client16.user.setAvatar(argresult);
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client16.user.setStatus(argresult);
  
      }
  
    });

    
     client17.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client17.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
        } else if(message.content.startsWith(prefix + 'pl17')) {
          client17.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'avatar17')) {
          client17.user.setAvatar(argresult);
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client7.user.setStatus(argresult);
  
      }
  
    });

    
     client18.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client18.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
        } else if(message.content.startsWith(prefix + 'pl18')) {
          client18.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'avatar18')) {
          client18.user.setAvatar(argresult);
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client18.user.setStatus(argresult);
  
      }
  
    });

    
     client19.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client19.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
        } else if(message.content.startsWith(prefix + 'pl19')) {
          client19.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'avatar19')) {
          client19.user.setAvatar(argresult);
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client19.user.setStatus(argresult);
  
      }
  
    });
   
     client20.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client20.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
        } else if(message.content.startsWith(prefix + 'pl20')) {
          client20.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'avatar20')) {
          client20.user.setAvatar(argresult);
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client20.user.setStatus(argresult);
  
      }
  
    });

 client21.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client21.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
      } else if(message.content.startsWith(prefix + 'setWatching')) {
          client21.user.setActivity(argresult,{type: 'WATCHING'});
  
        } else if(message.content.startsWith(prefix + 'setListening')) {
          client21.user.setActivity(argresult,{type: 'LISTENING'});
  
        } else if(message.content.startsWith(prefix + 'pl21')) {
          client21.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'setName21')) {
          client21.user.setUsername(argresult);
  
        } else if(message.content.startsWith(prefix + 'avatar21')) {
          client21.user.setAvatar(argresult);
  
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client21.user.setStatus(argresult);
  
  
      }
  
    });

 client22.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client22.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
      } else if(message.content.startsWith(prefix + 'setWatching')) {
          client22.user.setActivity(argresult,{type: 'WATCHING'});
  
        } else if(message.content.startsWith(prefix + 'setListening')) {
          client22.user.setActivity(argresult,{type: 'LISTENING'});
  
        } else if(message.content.startsWith(prefix + 'pl22')) {
          client22.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'setName22')) {
          client22.user.setUsername(argresult);
  
        } else if(message.content.startsWith(prefix + 'avatar22')) {
          client22.user.setAvatar(argresult);
  
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client22.user.setStatus(argresult);
  
  
      }
  
    });

 client23.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client23.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
      } else if(message.content.startsWith(prefix + 'setWatching')) {
          client23.user.setActivity(argresult,{type: 'WATCHING'});
  
        } else if(message.content.startsWith(prefix + 'setListening')) {
          client23.user.setActivity(argresult,{type: 'LISTENING'});
  
        } else if(message.content.startsWith(prefix + 'pl23')) {
          client23.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'setName23')) {
          client23.user.setUsername(argresult);
  
        } else if(message.content.startsWith(prefix + 'avatar23')) {
          client23.user.setAvatar(argresult);
  
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client23.user.setStatus(argresult);
  
  
      }
  
    });

 client24.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client24.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
      } else if(message.content.startsWith(prefix + 'setWatching')) {
          client24.user.setActivity(argresult,{type: 'WATCHING'});
  
        } else if(message.content.startsWith(prefix + 'setListening')) {
          client24.user.setActivity(argresult,{type: 'LISTENING'});
  
        } else if(message.content.startsWith(prefix + 'pl24')) {
          client24.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'setName24')) {
          client24.user.setUsername(argresult);
  
        } else if(message.content.startsWith(prefix + 'avatar24')) {
          client24.user.setAvatar(argresult);
  
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client24.user.setStatus(argresult);
  
  
      }
  
    });


 client25.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client25.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
      } else if(message.content.startsWith(prefix + 'setWatching')) {
          client25.user.setActivity(argresult,{type: 'WATCHING'});
  
        } else if(message.content.startsWith(prefix + 'setListening')) {
          client25.user.setActivity(argresult,{type: 'LISTENING'});
  
        } else if(message.content.startsWith(prefix + 'pl25')) {
          client25.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'setName25')) {
          client25.user.setUsername(argresult);
  
        } else if(message.content.startsWith(prefix + 'avatar25')) {
          client25.user.setAvatar(argresult);
  
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client25.user.setStatus(argresult);
  
  
      }
  
    });


 client26.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client26.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
      } else if(message.content.startsWith(prefix + 'setWatching')) {
          client26.user.setActivity(argresult,{type: 'WATCHING'});
  
        } else if(message.content.startsWith(prefix + 'setListening')) {
          client26.user.setActivity(argresult,{type: 'LISTENING'});
  
        } else if(message.content.startsWith(prefix + 'pl26')) {
          client26.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'setName26')) {
          client26.user.setUsername(argresult);
  
        } else if(message.content.startsWith(prefix + 'avatar26')) {
          client26.user.setAvatar(argresult);
  
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client26.user.setStatus(argresult);
  
  
      }
  
    });

 client27.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client27.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
      } else if(message.content.startsWith(prefix + 'setWatching')) {
          client27.user.setActivity(argresult,{type: 'WATCHING'});
  
        } else if(message.content.startsWith(prefix + 'setListening')) {
          client27.user.setActivity(argresult,{type: 'LISTENING'});
  
        } else if(message.content.startsWith(prefix + 'pl27')) {
          client27.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'setName27')) {
          client27.user.setUsername(argresult);
  
        } else if(message.content.startsWith(prefix + 'avatar27')) {
          client27.user.setAvatar(argresult);
  
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client27.user.setStatus(argresult);
  
  
      }
  
    });

 client28.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client28.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
      } else if(message.content.startsWith(prefix + 'setWatching')) {
          client28.user.setActivity(argresult,{type: 'WATCHING'});
  
        } else if(message.content.startsWith(prefix + 'setListening')) {
          client28.user.setActivity(argresult,{type: 'LISTENING'});
  
        } else if(message.content.startsWith(prefix + 'pl28')) {
          client28.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'setName28')) {
          client28.user.setUsername(argresult);
  
        } else if(message.content.startsWith(prefix + 'avatar28')) {
          client28.user.setAvatar(argresult);
  
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client28.user.setStatus(argresult);
  
  
      }
  
    });

 client29.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client29.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
      } else if(message.content.startsWith(prefix + 'setWatching')) {
          client29.user.setActivity(argresult,{type: 'WATCHING'});
  
        } else if(message.content.startsWith(prefix + 'setListening')) {
          client29.user.setActivity(argresult,{type: 'LISTENING'});
  
        } else if(message.content.startsWith(prefix + 'pl29')) {
          client29.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'setName29')) {
          client29.user.setUsername(argresult);
  
        } else if(message.content.startsWith(prefix + 'avatar29')) {
          client29.user.setAvatar(argresult);
  
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client29.user.setStatus(argresult);
  
  
      }
  
    });

 client30.on('message', message => {
      var prefix = ".";
  
      let argresult = message.content.split(` `).slice(1).join(' ');
      if (message.content.startsWith(prefix + 'setStreaming')) {
        if (!developers.includes(message.author.id)) return;
        message.delete();
       client30.user.setGame(argresult, '"https://www.twitch.tv/idk"');
  
      } else if(message.content.startsWith(prefix + 'setWatching')) {
          client30.user.setActivity(argresult,{type: 'WATCHING'});
  
        } else if(message.content.startsWith(prefix + 'setListening')) {
          client30.user.setActivity(argresult,{type: 'LISTENING'});
  
        } else if(message.content.startsWith(prefix + 'p30')) {
          client30.user.setActivity(argresult,{type: 'PLAYING'});
  
        } else if(message.content.startsWith(prefix + 'setName30')) {
          client30.user.setUsername(argresult);
  
        } else if(message.content.startsWith(prefix + 'avatar3')) {
          client30.user.setAvatar(argresult);
  
  
        } else if(message.content.startsWith(prefix + 'setStatus')) {
          if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
          client30.user.setStatus(argresult);
  
  
      }
  
    });
